import React from 'react';
import styled from 'styled-components';

import MoneyOffOutlinedIcon from '@material-ui/icons/MoneyOffOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

import Center from "components/Center";

const IconWrapper = styled.div`
  height: 20px;
  width: 20px;
  color: ${({ theme, payed }) => (payed ? theme.colors.success : theme.colors.danger)};
`;

const PaymentStatus = ({ payed }) => (
  <Center>
    <IconWrapper payed={payed}>
      {payed ? <MonetizationOnOutlinedIcon/> : <MoneyOffOutlinedIcon/>}
    </IconWrapper>
  </Center>
);

export default PaymentStatus;
