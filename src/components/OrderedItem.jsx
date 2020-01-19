import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.neutral[400]};
  padding: 16px 0;
`;
const Name = styled.div`
  text-transform: capitalize;
`;
const Price = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

const OrderedItem = ({ amount, name, price }) => (
  <Wrapper>
    <div>{`${amount}x`}</div>
    <Name>{name}</Name>
    <Price>{`${(amount * price).toFixed(2)} zł`}</Price>
  </Wrapper>
);

export default OrderedItem;
