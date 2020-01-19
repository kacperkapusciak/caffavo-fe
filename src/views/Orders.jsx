import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import axios from "axios-instance";

import { withAuth } from 'providers/AuthProvider';

import Workspace from 'components/Workspace';
import Header from 'components/Header';
import Spinner from 'components/Spinner';
import { TableHeader, TableRow } from 'components/Table';
import PaymentStatus from 'components/PaymentStatus';
import OrderedItem from "components/OrderedItem";
import Label from "components/Label";

const OrderNumber = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  
  &:hover {
    text-decoration: underline;
  }
`;
const Detail = styled.div`
  color: ${({ theme }) => theme.colors.neutral[400]};
  margin: ${({ last }) => last ? '8px 0 26px' : '8px 0 15px'};
  font-weight: ${({ bold }) => bold ? 'bold' : 'normal'};
  font-size: ${({ bold }) => bold ? '25px' : '17px'}
`;
const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Orders = ({ auth }) => {
  const [orders, setOrders] = useState([]);
  const [orderId, setOrderId] = useState();
  const [orderDetails, setOrderDetails] = useState();
  const [user, setUser] = useState();
  const [orderedItems, setOrderedItems] = useState();
  const [isSufficientData, setIsSufficientData] = useState(false);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [loadingOrderDetails, setLoadingOrderDetails] = useState();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const url = auth.admin ? 'orders/' : `orders/user/${auth.id}`;
      const { data } = await axios.get(url);

      if (data) {
        setOrders(data);
        setLoadingOrders(false);
      }
    })();
  }, []);

  const fetchOrderDetails = async id => {
    setOrderId(id);
    setLoadingOrderDetails(true);
    const { data } = await axios.get(`orders/${id}`);
    if (data) {
      setOrderDetails(data);
      const { user: userData, orderedItems: orderedItemsData } = data;
      setUser(userData);
      setIsSufficientData(userData.firstName && userData.lastName &&
        userData.street && userData.building &&
        userData.postal && userData.city);
      setOrderedItems(orderedItemsData);
    }
    setLoadingOrderDetails(false);
  };

  const orderColumns = auth.admin ? (
    ['zamówienie', 'data', 'email', 'koszt', 'opłacone', 'status']
  ) : (
    ['zamowienie', 'data', 'koszt', 'opłacone', 'status']
  );

  const layout = auth.admin ? '95px 120px 1fr 100px 80px 1fr' : '95px 1fr 1fr 1fr 1fr';

  const formatDate = date => {
    const newDate = new Date(date);
    const month = newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` : newDate.getMonth();
    return `${newDate.getDate()}.${month}.${newDate.getFullYear()} r.`;
  };

  return (
    <Workspace>
      <section>
        <Header huge>Zamówienia</Header>
        <TableHeader layout={layout}>
          {orderColumns.map(el => <div key={el}>{el}</div>)}
        </TableHeader>
        {loadingOrders ? <Spinner/> : (
          orders.map(order => (
            <TableRow
              key={`orders-${order.id}`}
              layout={layout}
              onClick={() => fetchOrderDetails(order.id)}
              active={orderId === order.id}
            >
              <OrderNumber onClick={() => history.push(`/orders/${order.id}`)}>{`#${order.id}`}</OrderNumber>
              <div>{formatDate(order.createdAt)}</div>
              {order.email && <div>{order.email}</div>}
              <div>{`${(order.price + order.deliveryCost).toFixed(2)} zł`}</div>
              <PaymentStatus payed={order.payed}/>
              <div>{order.status}</div>
            </TableRow>
          ))
        )}
      </section>
      <section>
        {orderId && (
          <>
            <Header>Szczegóły</Header>
            {loadingOrderDetails ? <Spinner/> : (
              <div>
                <Header subheader>Dane zamawiającego</Header>
                <Label>E-mail</Label>
                <Detail>{user.email}</Detail>
                {isSufficientData && (
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
                      <Detail last>{orderDetails.user.phone}</Detail>
                    </div>
                  </InfoWrapper>
                )}
                <div>
                  <Header subheader>Zamówienie</Header>
                  {orderedItems
                    .filter(({ amount }) => amount !== 0)
                    .map(({ amount, price, name }) => (
                      <OrderedItem
                        key={`ordered-${name}`}
                        name={name}
                        amount={amount}
                        price={price}
                      />
                    ))}
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </Workspace>
  )
};

export default withAuth(Orders);