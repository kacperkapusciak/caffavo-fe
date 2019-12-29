import React, { useState } from 'react';
import styled from 'styled-components';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import { store } from 'react-notifications-component';

import { withAuth } from 'providers/AuthProvider';

import Center from 'components/Center';
import Label from 'components/Label';
import Input from 'components/Input';
import Button from 'components/Button';
import Header from 'components/Header';
import ErrorMessage, { ErrorMessageStyled } from 'components/ErrorMessage';
import Link from 'components/Link';

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

const Login = ({ auth }) => {
  const [error, setError] = useState(null);

  const tryLogin = async ({ email, password }) => {
    try {
      const response = await axios({
        method: 'post',
        url: 'https://caffavo.herokuapp.com/auth',
        data: {
          email,
          password
        }
      });
      if (response.status === 200) {
        const { id, admin } = response.data;
        auth.login(id, admin);

        store.addNotification({
          title: "Udało się!",
          message: "Zalogowano na konto.",
          type: "success",
          insert: "top",
          container: "top-right",
          animationIn: ["animated", "fadeInRight"],
          animationOut: ["animated", "fadeOutRight"],
          dismiss: {
            duration: 5000
          }
        });
      }

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