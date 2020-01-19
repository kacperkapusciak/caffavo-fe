import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';

import axios from 'axios-instance';
import { withAuth } from 'providers/AuthProvider';

import Workspace from 'components/Workspace';
import Header from 'components/Header';
import Spinner from 'components/Spinner';
import Product from 'components/Product';
import Button from 'components/Button';
import OrderedItem from 'components/OrderedItem'
import openNotification from "utils/openNotification";

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 5px;
  margin-bottom: 28px;
  
  @media (max-width: 1550px) {
    grid-template-columns: 1fr;
  }
`;
const OrderedItems = styled.div`
  height: calc(100vh - 380px);
  overflow: auto;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.neutral[400]};
  padding: 16px 0;
`;
const Center = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`;
const TotalPrice = styled.div`
  font-weight: bold;
`;


const Offer = props => {
  const { offer, loading, setFieldValue, values } = props;

  const itemsToOrder = [...offer];
  for (const [key, value] of Object.entries(values)) {
    itemsToOrder.forEach(item => {
      if (item.name === key)
        item.amount = value
    })
  }
  const orderPrice = itemsToOrder.length &&
    itemsToOrder.reduce((total, item) => total + item.price * item.amount, 0);

  return (
    <Workspace>
      <div>
        <Header huge>Oferta</Header>
        {loading ? <Spinner/> : (
          <>
            <Header subheader>Kawy</Header>
            <ProductWrapper>
              {offer
                .filter(item => item.coffeeTypeId)
                .map(coffee => (
                  <Product
                    key={`${coffee.name}`}
                    type="coffee"
                    name={coffee.name}
                    price={parseFloat(coffee.price)}
                    setFieldValue={setFieldValue}
                  />
                ))}
            </ProductWrapper>
            <Header subheader>Wyroby cukiernicze</Header>
            <ProductWrapper>
              {offer
                .filter(item => item.bakeryId)
                .map(bakery => (
                  <Product
                    key={`${bakery.name}`}
                    type="bakery"
                    name={bakery.name}
                    price={bakery.price}
                    setFieldValue={setFieldValue}
                  />
                ))}
            </ProductWrapper>
          </>
        )}
      </div>
      <div>
        <Header>Zamawiasz</Header>
        <OrderedItems>
          {itemsToOrder
            .filter(({ amount }) => amount !== 0)
            .map(({ amount, price, name }) => (
              <OrderedItem
                key={`ordered-${name}`}
                name={name}
                amount={amount}
                price={price}
              />
            ))}
        </OrderedItems>
        {orderPrice ? (
          <>
            <SummaryItem>
              <div>Kwota częściowa</div>
              <div>{`${orderPrice.toFixed(2)} zł`}</div>
            </SummaryItem>
            <SummaryItem>
              <div>Koszty dostawy</div>
              <div>5.00 zł</div>
            </SummaryItem>
            <SummaryItem>
              <TotalPrice>Kwota całkowita</TotalPrice>
              <TotalPrice>{`${(orderPrice + 5).toFixed(2)} zł`}</TotalPrice>
            </SummaryItem>
            <Center>
              <Button primary type="submit">Dalej</Button>
            </Center>
          </>
        ) : null}
      </div>
    </Workspace>
  )
};

const OfferContainer = ({ auth }) => {
  const [offer, setOffer] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const response = await axios.get('offer');

      if (response.data) {
        setOffer(response.data);
        setLoading(false);
      }
    })();
  }, []);

  const initialValues = {};
  offer.forEach(item => {
    initialValues[item.name] = 0;
  });

  const tryOrderProducts = async (values) => {
    const data = {
      userId: auth.id,
      items: values
    };

    try {
      const response = await axios({
        method: 'post',
        url: 'orders',
        data
      });
      if (response.status === 200) {
        history.push(`/orders/${response.data.id}`);
      }
    } catch (err) {
      openNotification('danger', 'Wystąpił błąd.', 5000);
    }
  };

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={values => {
        const itemsToOrder = [...offer];
        for (const [key, value] of Object.entries(values)) {
          itemsToOrder.forEach(item => {
            if (item.name === key)
              item.amount = value
          })
        }
        itemsToOrder.forEach(item => {
          delete item.name;
          delete item.price;
        });
        const filteredItemsToOrder = itemsToOrder.filter(item => item.amount !== 0);
        tryOrderProducts(filteredItemsToOrder);
      }}
    >
      {({ setFieldValue, values }) => (
        <Form>
          <Offer
            setFieldValue={setFieldValue}
            values={values}
            offer={offer}
            loading={loading}
          />
        </Form>
      )}
    </Formik>
  )
};


export default withAuth(OfferContainer);