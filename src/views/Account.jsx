import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import axios from 'axios-instance';
import * as Yup from "yup";

import openNotification from "utils/openNotification";

import { withAuth } from 'providers/AuthProvider';

import { Field, Form, Formik } from "formik";
import Label from 'components/Label';
import Input from 'components/Input';
import ErrorMessage, { ErrorMessageStyled } from 'components/ErrorMessage';
import Button from "components/Button";
import Header from 'components/Header';
import Product from 'components/Product';
import Spinner from 'components/Spinner';

const AccountLayout = styled.div`
  padding: 48px 48px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 100px;
  max-width: 1200px;
`;
const Separate = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
const MoveRight = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 28px;
`;
const ButtonStyled = styled(Button)`
  padding: 10px 16px;
`;

const validationSchema = Yup.object({
  firstName: Yup.string()
    .required('Pole wymagane.'),
  lastName: Yup.string()
    .required('Pole wymagane.'),
  street: Yup.string()
    .required('Pole wymagane.'),
  building: Yup.string()
    .required('Pole wymagane.'),
  apartment: Yup.string(),
  postal: Yup.string()
    .matches(/\d\d-\d\d\d/, 'Niepoprawny kod pocztowy.')
    .required('Pole wymagane.'),
  city: Yup.string()
    .required('Pole wymagane.'),
  phone: Yup.string()
    .min(8, 'Niepoprawny numer telefonu')
    .required('Pole wymagane.'),
});


const Account = ({ auth }) => {
  const [user, setUser] = useState();
  const [favouriteCoffee, setFavouriteCoffee] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    (async () => {
      const url = auth.admin ? '/offer/favouritecoffee' : `/offer/favouritecoffee?user=${auth.id}`;
      const [userData, favCoffee] = await Promise.all([
        axios.get(`/users/${auth.id}`),
        axios.get(url)
      ]);
      if (userData && favCoffee) {
        setUser(userData.data);
        setFavouriteCoffee(favCoffee.data);
        setLoading(false);
      }
    })();
  }, []);

  const refetchUser = async () => {
    try {
      const response = await axios.get(`/users/${auth.id}`);
      if (response.status === 200) {
        setUser(response.data);
      }
    } catch (err) {
      setError(err.response.data);
    }
  };

  const tryEditUser = async values => {
    setLoading(true);
    try {
      const response = await axios({
        method: 'put',
        url: `users/${auth.id}`,
        data: values
      });
      if (response.status === 200) {
        await refetchUser();
        openNotification('success', 'Wprowadzono zmiany.', 3000);
      }
    } catch (err) {
      setError(err.response.data);
    }
    setLoading(false);
  };

  if (loading) return <Spinner wholePage/>;

  return (
    <Formik
      enableReinitialize
      validationSchema={validationSchema}
      initialValues={user}
      onSubmit={values => tryEditUser(values)}
    >
      <AccountLayout>
        <section>
          <Header>Moje dane</Header>
          <Form>
            <Separate>
              <div>
                <Label htmlFor="firstName">Imie</Label>
                <Field name="firstName">
                  {({ field }) => <Input type="text" {...field} />}
                </Field>
                <ErrorMessage name="firstName"/>
              </div>
              <div>
                <Label htmlFor="lastName">Nazwisko</Label>
                <Field name="lastName">
                  {({ field }) => <Input type="text" {...field} />}
                </Field>
                <ErrorMessage name="lastName"/>
              </div>
            </Separate>
            <Separate>
              <div>
                <Label htmlFor="street">Ulica</Label>
                <Field name="street">
                  {({ field }) => <Input type="text" {...field} />}
                </Field>
                <ErrorMessage name="street"/>
              </div>
              <Separate>
                <div>
                  <Label htmlFor="building">Budynek</Label>
                  <Field name="building">
                    {({ field }) => <Input type="text" {...field} />}
                  </Field>
                  <ErrorMessage name="building"/>
                </div>
                <div>
                  <Label htmlFor="apartment">Lokal</Label>
                  <Field name="apartment">
                    {({ field }) => <Input type="text" {...field} />}
                  </Field>
                  <ErrorMessage name="apartment"/>
                </div>
              </Separate>
            </Separate>
            <Separate>
              <div>
                <Label htmlFor="postal">Kod pocztowy</Label>
                <Field name="postal">
                  {({ field }) => <Input type="text" {...field} />}
                </Field>
                <ErrorMessage name="postal"/>
              </div>
              <div>
                <Label htmlFor="city">Miasto</Label>
                <Field name="city">
                  {({ field }) => <Input type="text" {...field} />}
                </Field>
                <ErrorMessage name="city"/>
              </div>
            </Separate>
            <Label htmlFor="phone">Telefon</Label>
            <Field name="phone">
              {({ field }) => <Input type="tel" {...field} />}
            </Field>
            <ErrorMessage name="phone"/>
            <MoveRight>
              <ButtonStyled type="submit" primary>
                Zapisz
              </ButtonStyled>
            </MoveRight>
            {error && <ErrorMessageStyled>{error}</ErrorMessageStyled>}
          </Form>
        </section>
        <section>
          <Header>Ulubiona kawa</Header>
          {!loading && (
            <Product type="coffee" name={favouriteCoffee.name} amount={favouriteCoffee.timesOrdered}/>
          )}
        </section>
      </AccountLayout>
    </Formik>
  )
};

export default withAuth(Account);