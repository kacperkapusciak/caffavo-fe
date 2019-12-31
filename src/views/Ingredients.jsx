import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import axios from 'axios-instance';
import openNotification from 'providers/openNotification';

import Workspace from 'components/Workspace';
import Header from 'components/Header';
import { TableHeader, TableRow } from 'components/Table';
import Status from 'components/Status';
import IngredientIcon from 'components/IngredientIcon';
import Spinner from 'components/Spinner';
import Button from 'components/Button';
import SearchBar from 'components/Searchbar';
import Label from 'components/Label';
import Input from 'components/Input';
import ErrorMessage, { ErrorMessageStyled } from 'components/ErrorMessage';
import Select from 'components/Select';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Separate = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: ${({ mode }) => mode === 'edit' ? 'space-between' : 'flex-end'};
  margin-bottom: 28px;
`;
const ButtonStyled = styled(Button)`
  padding: 0;
  width: 100px;
`;

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Pole wymagane.'),
  amount: Yup.number()
    .min(0)
    .required('Pole wymagane.'),
  unit: Yup.string()
    .required('Pole wymagane.'),
  price: Yup.number()
    .positive('Wartość musi być dodatnia.')
    .required('Pole wymagane.'),
});

const Ingredients = props => {
  const {
    setFieldValue,
    error,
    setError,
    editLoading,
    setEditLoading,
    mode,
    setMode,
    defaultIngredient,
    ingredientId,
    setIngredientId
  } = props;

  const [ingredients, setIngredients] = useState([]);
  const [ingredientsLoading, setIngredientsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const fields = ['name', 'amount', 'unit', 'price'];

  const goToEditMode = ingredient => {
    setMode('edit');
    fields.forEach(field => setFieldValue(field, ingredient[field]));
    setIngredientId(ingredient.id);
  };

  const goToAddMode = () => {
    setMode('add');
    fields.forEach(field => setFieldValue(field, defaultIngredient[field]));
    setIngredientId(null);
  };

  const tryDeleteIngredient = async () => {
    setEditLoading(true);

    try {
      const response = await axios({
        method: 'delete',
        url: `ingredients/${ingredientId}`,
      });
      if (response.status === 200) {
        goToAddMode();
        setEditLoading(false);
        openNotification('success', 'Usunięto składnik', 3000);
      }
    } catch (err) {
      setError(err.response.data);
      setEditLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const response = await axios.get('ingredients');

      if (response.data) {
        setIngredients(response.data);
        setIngredientsLoading(false);
      }
    })();
  }, [ingredients]);

  return (
    <Workspace>
      <div>
        <Flex>
          <Header huge>Składniki</Header>
          {mode === 'edit' && <Button onClick={goToAddMode} primary>+ Dodaj</Button>}
          <SearchBar value={searchValue} setValue={setSearchValue}/>
        </Flex>
        <div>
          <TableHeader>
            {['typ', 'nazwa', 'ilość', 'cena', 'dostępność'].map(el => <div key={el}>{el}</div>)}
          </TableHeader>
          {ingredientsLoading && <Spinner/>}
          {ingredients
            .filter(({ name }) => !searchValue || name.includes(searchValue))
            .map(ingredient => {
              const unit = ingredient.unit === 'kilogram' ? 'kg' : ingredient.unit;
              return (
                <TableRow
                  key={ingredient.id}
                  onClick={() => goToEditMode(ingredient)}
                  active={ingredientId === ingredient.id}
                >
                  <IngredientIcon unit={ingredient.unit}/>
                  <div>{ingredient.name}</div>
                  <div>{`${ingredient.amount} ${unit}`}</div>
                  <div>{`${ingredient.price} PLN/${unit}`}</div>
                  <Status status={ingredient.status}/>
                </TableRow>
              );
            })}
        </div>
      </div>
      <div>
        <Header>{mode === 'add' ? 'Dodaj' : 'Edytuj'}</Header>
        {editLoading ? (
          <Spinner/>
        ) : (
          <Form>
            <Label htmlFor="name">Nazwa</Label>
            <Field name="name">
              {({ field }) => <Input type="text" {...field} />}
            </Field>
            <ErrorMessage name="name"/>
            <Label htmlFor="amount">Ilość</Label>
            <Field name="amount">
              {({ field }) => <Input type="number" {...field} />}
            </Field>
            <ErrorMessage name="amount"/>
            <Label htmlFor="unit">Jednostka</Label>
            <Field
              name="unit"
              component={Select}
              options={[
                { value: 'kilogram', label: 'kilogram' },
                { value: 'litr', label: 'litr' },
                { value: 'kostka', label: 'kostka' }
              ]}
            />
            <ErrorMessage name="unit"/>
            <Label htmlFor="price">Cena</Label>
            <Field name="price">
              {({ field }) => <Input type="number" {...field} />}
            </Field>
            <ErrorMessage name="price"/>
            <Separate mode={mode}>
              {mode === 'edit' && (
                <ButtonStyled onClick={tryDeleteIngredient}>
                  Usuń
                </ButtonStyled>
              )}
              <ButtonStyled type="submit" primary>
                Zatwierdź
              </ButtonStyled>
            </Separate>
          </Form>
        )}
        {error && <ErrorMessageStyled>{error}</ErrorMessageStyled>}
      </div>
    </Workspace>
  )
};

const IngredientsContainer = () => {
  const [editLoading, setEditLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mode, setMode] = useState('add');

  const [ingredientId, setIngredientId] = useState(null);


  const defaultIngredient = { name: '', amount: 1, unit: 'kilogram', price: 1 };

  const tryAddIngredient = async (values) => {
    const { name, amount, unit, price } = values;
    setEditLoading(true);

    try {
      const response = await axios({
        method: 'post',
        url: 'ingredients',
        data: {
          name, amount, unit, price
        }
      });
      if (response.status === 200) {
        setEditLoading(false);
        openNotification('success', 'Dodano składnik', 3000);
      }
    } catch (err) {
      setError(err.response.data);
      setEditLoading(false);
    }
  };

  const tryEditIngredient = async (values) => {
    const { name, amount, unit, price } = values;
    setEditLoading(true);

    try {
      const response = await axios({
        method: 'put',
        url: `ingredients/${ingredientId}`,
        data: {
          name, amount, unit, price
        }
      });
      if (response.status === 200) {
        setEditLoading(false);
        openNotification('success', 'Wprowadzono zmiany.', 3000);
      }
    } catch (err) {
      setError(err.response.data);
      setEditLoading(false);
    }
  };

  return (
    <Formik
      initialValues={defaultIngredient}
      validationSchema={validationSchema}
      onSubmit={values => {
        if (mode === 'add')
          tryAddIngredient(values);
        else
          tryEditIngredient(values);
      }}
    >
      {({ setFieldValue }) => (
        <Ingredients
          setFieldValue={setFieldValue}
          error={error}
          setError={setError}
          editLoading={editLoading}
          setEditLoading={setEditLoading}
          mode={mode}
          setMode={setMode}
          defaultIngredient={defaultIngredient}
          ingredientId={ingredientId}
          setIngredientId={setIngredientId}
        />
      )}
    </Formik>
  )
};

export default IngredientsContainer;