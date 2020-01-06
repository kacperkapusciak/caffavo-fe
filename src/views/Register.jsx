import React, { useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import axios from 'axios-instance';
import openNotification from 'utils/openNotification';

import Center from 'components/Center';
import Header from 'components/Header';
import { Field, Form, Formik } from "formik";
import Label from "components/Label";
import Input from "components/Input";
import ErrorMessage, { ErrorMessageStyled } from "components/ErrorMessage";
import Button from "components/Button";
import Link from 'components/Link';
import Spinner from "components/Spinner";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
const BoundingBox = styled.section`
  width: 600px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
const Flex = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 28px;
`;
const ButtonStyled = styled(Button)`
  width: 256px;
`;
const LinkStyled = styled(Link)`
  margin-left: 5px;
`;

const initialValues = {
  email: '',
  password: '',
  passwordConfirm: '',
  firstName: '',
  lastName: '',
  phone: ''
};

function equalTo(ref, message) {
  return Yup.mixed().test({
    name: 'equalTo',
    exclusive: false,
    message,
    params: {
      reference: ref.path,
    },
    test(value) {
      return value === this.resolve(ref);
    },
  });
}

Yup.addMethod(Yup.string, 'equalTo', equalTo);

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Nieprawidłowy format.')
    .required('Pole wymagane.'),
  password: Yup.string()
    .min(5, 'Hasło musi być przynajmniej 5 znakowe.')
    .required('Pole wymagane.'),
  passwordConfirm: Yup.string()
    .equalTo(Yup.ref('password'), 'Hasła muszą być identyczne.')
    .required('Pole wymagane.'),
  firstName: Yup.string()
    .required('Pole wymagane.'),
  lastName: Yup.string()
    .required('Pole wymagane.'),
  phone: Yup.string()
    .min(8, 'Sprawdź poprawność numeru telefonu.')
    .required('Pole wymagane.'),
});

const Register = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const tryRegister = async (values) => {
    const { email, password, firstName, lastName, phone } = values;
    setLoading(true);

    try {
      const response = await axios({
        method: 'post',
        url: 'users',
        data: {
          email, password, firstName, lastName, phone
        }
      });
      if (response.status === 200) {
        setLoading(false);
        openNotification('success', 'Teraz możesz zalogować się na swoje konto.', 7000);
        history.push('login/');
      }
    } catch (err) {
      setError(err.response.data);
      setLoading(false);
    }
  };

  if (loading) return <Spinner wholePage/>;

  return (
    <Wrapper>
      <Center>
        <BoundingBox>
          <Header>Zarejestruj się</Header>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={values => {
              tryRegister(values);
            }}
            render={() => (
              <Form>
                <Label htmlFor="email">E-mail</Label>
                <Field name="email">
                  {({ field }) => <Input type="email" {...field} />}
                </Field>
                <ErrorMessage name="email"/>
                <Label htmlFor="password">Hasło</Label>
                <Field name="password">
                  {({ field }) => <Input type="password" {...field} />}
                </Field>
                <ErrorMessage name="password"/>
                <Label htmlFor="passwordConfirm">Powtórz hasło</Label>
                <Field name="passwordConfirm">
                  {({ field }) => <Input type="password" {...field} />}
                </Field>
                <ErrorMessage name="passwordConfirm"/>
                <Grid>
                  <div>
                    <Label htmlFor="firstName">Imię</Label>
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
                </Grid>
                <Label htmlFor="phone">Telefon</Label>
                <Field name="phone">
                  {({ field }) => <Input type="tel" {...field} />}
                </Field>
                <ErrorMessage name="phone"/>
                <Flex>
                  <ButtonStyled type="submit" primary>
                    Zarejestruj konto
                  </ButtonStyled>
                </Flex>
              </Form>
            )}
          />
          {error && <ErrorMessageStyled>{error}</ErrorMessageStyled>}
          <p>
            Masz konto?
            <LinkStyled to="/login">Zaloguj się</LinkStyled>
          </p>
        </BoundingBox>
      </Center>
    </Wrapper>
  )
};

export default Register;