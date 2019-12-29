import React, { useState } from 'react';
import styled from 'styled-components';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';

import { withAuth } from 'providers/AuthProvider';

import Center from 'components/Center';
import Label from 'components/Label';
import Input from 'components/Input';
import Button from 'components/Button';
import Header from 'components/Header';
import ErrorMessage, { ErrorMessageStyled } from 'components/ErrorMessage';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;
const BoundingBox = styled.section`
  width: 600px;
`;
const ButtonStyled = styled(Button)`
  margin: 1rem auto;
  width: 256px;
  float: right;
`;

const Login = ({ auth }) => {
  const [error, setError] = useState(null);

  const tryLogin = async ({ email, password }) => {
    let response;

    try {
      response = await axios({
        method: 'post',
        url: 'https://caffavo.herokuapp.com/auth',
        data: {
          email,
          password
        }
      });

      const { id, admin } = response.data;
      auth.login(id, admin);

    } catch (err) {
      setError(err);
    }
  };

  return (
    <Wrapper>
      <Center>
        <BoundingBox>
          <Header>Zaloguj się</Header>
          <Formik
            initialValues={{ email: '', password: '' }}
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
                <ButtonStyled type="submit" primary>
                  Zaloguj się
                </ButtonStyled>
              </Form>
            )}
          />
          {error && <ErrorMessageStyled>Błędny email lub hasło.</ErrorMessageStyled>}
        </BoundingBox>
      </Center>
    </Wrapper>
  )
};

export default withAuth(Login);