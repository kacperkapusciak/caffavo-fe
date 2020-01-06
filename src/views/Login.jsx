import React, { useState } from 'react';
import styled from 'styled-components';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import { withAuth } from 'providers/AuthProvider';
import axios from 'axios-instance';
import openNotification from 'utils/openNotification';

import Center from 'components/Center';
import Label from 'components/Label';
import Input from 'components/Input';
import Button from 'components/Button';
import Header from 'components/Header';
import ErrorMessage, { ErrorMessageStyled } from 'components/ErrorMessage';
import Link from 'components/Link';
import Spinner from 'components/Spinner';


const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
const BoundingBox = styled.section`
  width: 600px;
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

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Nieprawidłowy format.')
    .required('Pole wymagane.'),
  password: Yup.string()
    .min(5, 'Hasło musi być przynajmniej 5 znakowe.')
    .required('Pole wymagane.'),
});

const Login = ({ auth }) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const tryLogin = async ({ email, password }) => {
    setLoading(true);
    try {
      const response = await axios({
        method: 'post',
        url: 'auth',
        data: {
          email,
          password
        }
      });
      if (response.status === 200) {
        setLoading(false);
        const { id, admin } = response.data;
        auth.login(id, admin);
        openNotification('success', 'Zalogowano na konto.', 5000);
      }
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };

  if (loading) return <Spinner wholePage/>;

  return (
    <Wrapper>
      <Center>
        <BoundingBox>
          <Header>Zaloguj się</Header>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={values => {
              tryLogin(values);
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
                <Flex>
                  <ButtonStyled type="submit" primary>
                    Zaloguj się
                  </ButtonStyled>
                </Flex>
              </Form>
            )}
          />
          {error && <ErrorMessageStyled>Błędny email lub hasło.</ErrorMessageStyled>}
          <p>
            Nie masz konta?
            <LinkStyled to="/register">Zarejestruj się</LinkStyled>
          </p>
        </BoundingBox>
      </Center>
    </Wrapper>
  )
};

export default withAuth(Login);