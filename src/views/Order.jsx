import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory, useParams } from 'react-router-dom';

import axios from 'axios-instance';

import Workspace from 'components/Workspace';
import Header from 'components/Header';
import Spinner from 'components/Spinner';
import Label from 'components/Label';
import Button from 'components/Button';
import Product from 'components/Product';
import Input from "components/Input";
import ErrorMessage, { ErrorMessageStyled } from 'components/ErrorMessage';
import openNotification from "utils/openNotification";

const OrderLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 50px;
  
  @media (max-width: 1550px) {
    grid-template-columns: 1fr;
  }
`;
const Detail = styled.div`
  color: ${({ theme }) => theme.colors.neutral[400]};
  margin: ${({ last }) => last ? '8px 0 26px' : '8px 0 15px'};
  font-weight: ${({ bold }) => bold ? 'bold' : 'normal'};
  font-size: ${({ bold }) => bold ? '25px' : '17px'}
`;
const OrderInfo = styled.div`
  width: 200px;
  color: ${({ theme }) => theme.colors.danger};
`;
const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
const ButtonStyled = styled(Button)`
  padding: 10px 16px;
`;
const PayButton = styled(Button)`
  margin-top: 25px;
`;
const MoveRight = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-bottom: 28px;
`;
const Separate = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
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

const Order = () => {
  const { id } = useParams();
  const [order, setOrder] = useState();
  const [user, setUser] = useState();
  const [orderedItems, setOrderedItems] = useState();
  const [loading, setLoading] = useState(true);
  const [isSufficientData, setIsSufficientData] = useState(false);
  const [editUserData, setEditUserData] = useState(false);
  const [error, setError] = useState();

  const history = useHistory();

  const fetchOrderData = async () => {
    const response = await axios.get(`orders/${id}`);
    if (response.data) {
      setOrder(response.data);
      const { user: userData, orderedItems: orderedItemsData } = response.data;
      setUser(userData);
      setIsSufficientData(userData.firstName && userData.lastName &&
        userData.street && userData.building &&
        userData.postal && userData.city);
      setOrderedItems(orderedItemsData);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderData();
  }, []);

  const tryEditUser = async values => {
    const { id: userId } = values;
    setLoading(true);
    try {
      const response = await axios({
        method: 'put',
        url: `users/${userId}`,
        data: values
      });
      if (response.status === 200) {
        await fetchOrderData();
        openNotification('success', 'Wprowadzono zmiany.', 3000);
      }
    } catch (err) {
      setError(err.response.data);
      setLoading(false);
    }
  };

  const payOrder = async () => {
    try {
      const response = await axios({
        method: 'put',
        url: `orders/${id}/pay`
      });
      if (response.status === 200) {
        history.push('/orders');
        openNotification('success', 'Zapłacono za zamówienie.', 3000);
      }
    } catch (err) {
      openNotification('danger', 'Odrzucono płatność :(', 3000);
    }
  };

  return (
    <Workspace>
      <div>
        <Header>{`Zamówienie nr ${id}`}</Header>
        {loading ? <Spinner/> : (
          <OrderLayout>
            <section>
              <Header subheader>Zamówione produkty</Header>
              {orderedItems && orderedItems.map(item => (
                <Product
                  dense
                  key={item.id}
                  {...item}
                />
              ))}
            </section>
            <section>
              <Header subheader>Dane zamawiającego</Header>
              <Label>E-mail</Label>
              <Detail>{user.email}</Detail>
              {isSufficientData ? (
                <InfoWrapper>
                  <div>
                    <Label>Imię i nazwisko</Label>
                    <Detail>{`${user.firstName} ${user.lastName}`}</Detail>
                    <Label>Adres</Label>
                    <Detail>
                      {`${user.street} ${user.building}${user.apartment ? `/${user.apartment}` : ' '}`}
                      <br/>
                      {`${user.postal} ${user.city}`}
                    </Detail>
                    <Label>Telefon</Label>
                    <Detail last>{user.phone}</Detail>
                  </div>
                  <ButtonStyled onClick={() => setEditUserData(true)}>Edytuj</ButtonStyled>
                </InfoWrapper>
              ) : (
                <InfoWrapper>
                  <OrderInfo>
                    Wygląda na to, że nie masz wystarczających danych do wykonania zamówienia.
                  </OrderInfo>
                  <ButtonStyled onClick={() => setEditUserData(true)}>Uzupełnij dane</ButtonStyled>
                </InfoWrapper>
              )}
              <Header subheader>{!order.payed ? 'Do zapłaty' : 'Opłacono'}</Header>
              <Label>Kwota częściowa</Label>
              <Detail>{`${order.price} zł`}</Detail>
              <Label>Koszty dostawy</Label>
              <Detail>{`${order.deliveryCost} zł`}</Detail>
              <Label>Kwota całkowita</Label>
              <Detail bold>
                {`${(parseFloat(order.price) + parseFloat(order.deliveryCost)).toFixed(2)} zł`}
              </Detail>
              {!order.payed && (
                <PayButton
                  primary
                  unsized
                  disabled={!isSufficientData}
                  onClick={payOrder}
                >
                  Zapłać
                </PayButton>
              )}
            </section>
          </OrderLayout>
        )}
      </div>
      <div>
        {editUserData && (
          <Formik
            enableReinitialize
            initialValues={user}
            validationSchema={validationSchema}
            onSubmit={values => tryEditUser(values)}
          >
            <Form>
              <Header subheader>Edytuj</Header>
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
              <Separate street>
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
                  Zatwierdź
                </ButtonStyled>
              </MoveRight>
              {error && <ErrorMessageStyled>{error}</ErrorMessageStyled>}
            </Form>
          </Formik>
        )}
      </div>
    </Workspace>
  );
};

export default Order;