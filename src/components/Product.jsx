import React, { useState } from 'react';
import styled from 'styled-components';

import CakeOutlineIcon from "icons/CakeOutlineIcon";
import CakeFullIcon from 'icons/CakeFullIcon';
import CoffeeOutlineIcon from 'icons/CoffeeOutlineIcon';
import CoffeeFullIcon from 'icons/CoffeeFullIcon';

import Stepper from 'components/Stepper';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
  height: 180px;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  padding: 20px 12px;
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
  padding: 20px;
  
  @media (max-width: 1200px) {
    margin-top: 10px;
    padding: 10px;
  }
`;
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 20px;
`;
const ProductName = styled.p`
  color: ${({theme}) => theme.colors.neutral[400]};
  font-size: 22px;
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 15px;
`;
const Price = styled.p`
  color: ${({theme}) => theme.colors.primary};
  font-size: 18px;
`;


const Product = props => {
  const {type, name, price, setFieldValue} = props;
  const [hover, setHover] = useState(false);
  const toggleHover = () => setHover(!hover);

  return (
    <Wrapper onMouseEnter={toggleHover} onMouseLeave={toggleHover}>
      <IconWrapper>
        { type === 'coffee' ? (
          hover ? <CoffeeFullIcon/> : <CoffeeOutlineIcon />
        ) : (
          hover ? <CakeFullIcon/> : <CakeOutlineIcon />
        )}
      </IconWrapper>
      <ContentWrapper>
        <div>
          <ProductName>{name}</ProductName>
          <Price>{`${price} zł`}</Price>
        </div>
        <Stepper name={name} setFieldValue={setFieldValue}/>
      </ContentWrapper>
    </Wrapper>
  )
};

export default Product;