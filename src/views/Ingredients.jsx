import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Field, Form, Formik } from "formik";

import axios from 'axios-instance';

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
import * as Yup from "yup";
import { store } from "react-notifications-component";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Separate = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: ${({mode}) => mode === 'edit' ? 'space-between' : 'flex-end'};
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
    .positive('Wartość musi być dodatnia.')
    .required('Pole wymagane.'),
  unit: Yup.string()
    .required('Pole wymagane.'),
  price: Yup.number()
    .positive('Wartość musi być dodatnia.')
    .required('Pole wymagane.'),
});

const Ingredients = () => {
  const [ingredients, setIngredients] = useState([]);
  const [ingredientsLoading, setIngredientsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');

  const [mode, setMode] = useState('add');
  const [editLoading, setEditLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await axios.get('ingredients');

      if (response.data) {
        setIngredients(response.data);
        setIngredientsLoading(false);
      }
    })();
  }, []);

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
        store.addNotification({
          title: "Udało się!",
          message: "Dodano składnik.",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "fadeInRight"],
          animationOut: ["animated", "fadeOutRight"],
          dismiss: {
            duration: 3000
          }
        });
      }
    } catch (err) {
      setError(err.response.data);
      setEditLoading(false);
    }
  };

  return (
    <Workspace>
      <div>
        <Flex>
          <Header huge>Składniki</Header>
          <SearchBar value={searchValue} setValue={setSearchValue}/>
          {mode === 'edit' && <Button onClick={() => setMode('add')} primary>+ Dodaj</Button>}
        </Flex>
        <div>
          <TableHeader>
            {['', 'nazwa', 'ilość', 'cena', 'dostępność'].map(el => <div key={el}>{el}</div>)}
          </TableHeader>
          {ingredientsLoading && <Spinner/>}
          {ingredients
            .filter(({ name }) => !searchValue || name.includes(searchValue))
            .map(ingredient => {
              const unit = ingredient.unit === 'kilogram' ? 'kg' : ingredient.unit;
              return (
                <TableRow key={ingredient.id} onClick={() => setMode('edit')}>
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
          <Formik
            initialValues={{ name: '', amount: 0, unit: 'kilogram', price: 0 }}
            validationSchema={validationSchema}
            onSubmit={values => {
              if (mode === 'add')
                tryAddIngredient(values);
            }}
            render={() => (
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
                    <ButtonStyled>
                      Usuń
                    </ButtonStyled>
                  )}
                  <ButtonStyled type="submit" primary>
                    Zatwierdź
                  </ButtonStyled>
                </Separate>
              </Form>
            )}
          />
        )}
        {error && <ErrorMessageStyled>{error}</ErrorMessageStyled>}
      </div>
    </Workspace>
  )
};

export default Ingredients;