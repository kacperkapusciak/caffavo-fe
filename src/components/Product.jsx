import React, { useState } from 'react';
import styled from 'styled-components';

import CakeOutlineIcon from "icons/CakeOutlineIcon";
import CakeFullIcon from 'icons/CakeFullIcon';
import CoffeeOutlineIcon from 'icons/CoffeeOutlineIcon';
import CoffeeFullIcon from 'icons/CoffeeFullIcon';

import Stepper from 'components/Stepper';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${({ dense }) => dense ? '70px 1fr' : '150px 1fr'};
  height: ${({ dense }) => dense ? '90px' : '180px'};
  width: 100%;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  padding: ${({ dense }) => dense ? '10px' : '20px 12px'};
  margin: 8px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.22);
  user-select: none;
  
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 1200px) {
    grid-template-columns: 100px 1fr;
    height: 120px;
    padding: 0;
  }
`;
const IconWrapper = styled.div`
  padding: ${({ dense }) => dense ? '2px' : '20px'};
  
  @media (max-width: 1200px) {
    margin-top: 10px;
    padding: ${({ dense }) => dense ? '2px' : '10px'};
  }
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: ${({ dense }) => dense ? '20px 2px 20px 12px' : '20px'};
`;
const DetailWrapper = styled.div`
  display: flex;
  flex-direction: ${({ dense }) => dense ? 'row' : 'column'};
  align-items: ${({ dense }) => dense ? 'flex-end' : 'flex-start'};
  justify-content: ${({ dense }) => dense ? 'space-between' : 'unset'};
  padding-right: 6px;
`;
const ProductName = styled.p`
  color: ${({ theme }) => theme.colors.neutral[400]};
  font-size: 22px;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom:  ${({ dense }) => dense ? '0' : '15px'};
`;
const Price = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 18px;
`;
const Multiplier = styled.div`
  color: ${({ theme }) => theme.colors.neutral[200]};
  font-weight: bold;
  font-size: 20px;
  span {
    margin-left: 3px;
    font-size: 28px;
  }
`;


const Product = props => {
  const { type, dense, name, price, amount, setFieldValue } = props;
  const [hover, setHover] = useState(false);
  const toggleHover = () => setHover(!hover);

  return (
    <Wrapper onMouseEnter={toggleHover} onMouseLeave={toggleHover} dense={dense}>
      <IconWrapper dense={dense}>
        {type === 'coffee' ? (
          hover ? <CoffeeFullIcon/> : <CoffeeOutlineIcon/>
        ) : (
          hover ? <CakeFullIcon/> : <CakeOutlineIcon/>
        )}
      </IconWrapper>
      <ContentWrapper dense={dense}>
        <DetailWrapper dense={dense}>
          <ProductName dense={dense}>{name}</ProductName>
          <Price>{`${price} zł`}</Price>
        </DetailWrapper>
        {!setFieldValue && amount ? (
          <Multiplier>
            {`x ${Math.round(amount)}`}
          </Multiplier>
        ) : (
          <Stepper name={name} setFieldValue={setFieldValue}/>
        )}
      </ContentWrapper>
    </Wrapper>
  )
};

export default Product;