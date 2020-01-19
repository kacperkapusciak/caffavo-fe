import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios-instance';
import { useHistory } from 'react-router-dom';

import formatDate from "utils/formatDate";

import Workspace from 'components/Workspace';
import Header from "components/Header";
import { TableHeader, TableRow } from 'components/Table';
import Spinner from "components/Spinner";
import Label from 'components/Label';

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

const TransactionValue = styled.div`
  color: ${({ theme, value }) => value > 0 ? theme.colors.success : value === 0 ? theme.colors.black : theme.colors.danger};
`;

const Finances = () => {
  const [finance, setFinance] = useState();
  const [bankDetails, setBankDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const history = useHistory();


  useEffect(() => {
    (async () => {
      const [financeData, bankDetailsData] = await Promise.all([
        axios.get('/finance'),
        axios.get('/finance/bankdetails')
      ]);

      if (financeData && bankDetailsData) {
        setFinance(financeData.data);
        setBankDetails(bankDetailsData.data);
      }
      setLoading(false);
    })();
  }, []);

  const layout = "85px 200px 1fr 200px 70px";
  const transactionColumns = ['transakcja', 'data', 'tytuł', 'wartość', 'zamówienie'];

  return (
    <Workspace>
      <section>
        <Header huge>Transakcje</Header>
        <TableHeader layout={layout}>
          {transactionColumns.map(el => <div key={el}>{el}</div>)}
        </TableHeader>
        {loading ? <Spinner/> : (
          finance.map(transaction => (
            <TableRow
              key={`orders-${transaction.id}`}
              layout={layout}
            >
              <div>{transaction.id}</div>
              <div>{formatDate(transaction.createdAt)}</div>
              <div>{transaction.title}</div>
              <TransactionValue value={transaction.value}>{transaction.value.toFixed(2)}</TransactionValue>
              {transaction.orderId && (
                <OrderNumber
                  onClick={() => history.push(`/orders/${transaction.orderId}`)}
                >
                  {`#${transaction.orderId}`}
                </OrderNumber>
              )}
            </TableRow>
          ))
        )}
      </section>
      <section>
        <Header>Szczegóły</Header>
        {loading ? <Spinner/> : (
          <>
            <Label>Stan konta</Label>
            <Detail bold>{`${bankDetails.balance} zł`}</Detail>
            <Label>Liczba transakcji</Label>
            <Detail>{bankDetails.numberOfTransactions}</Detail>
            <Label>Liczba wpływów</Label>
            <Detail>{bankDetails.numberOfIncomes}</Detail>
            <Label>Liczba wydatków</Label>
            <Detail>{bankDetails.numberOfOutcomes}</Detail>
          </>
        )}
      </section>
    </Workspace>
  )
};

export default Finances;