import React, { useState } from 'react';
import styled from 'styled-components';
import { Field } from "formik";

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.neutral[400]};
  color: ${({ theme }) => theme.colors.neutral[400]};
  font-size: 18px;
  background: ${({ theme }) => theme.colors.background[200]};
  min-width: 106px;
`;
const ButtonStyled = styled.button`
  border: 1px solid transparent;
  background: ${({ theme }) => theme.colors.background[200]};
  padding: 10px 18px;
  cursor: pointer;
`;
const Value = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`;

const Stepper = ({name, setFieldValue}) => {
  const [value, setValue] = useState(0);

  const add = () => {
    setValue(value + 1);
    setFieldValue(name, value + 1);
  };
  const subtract = () => {
    const valueToSet = value > 0 ? value - 1 : value;
    setValue(valueToSet);
    setFieldValue(name, valueToSet);
  };

  return (
    <Wrapper>
      <Field name={name}>
        {({ field }) => <input type="hidden" {...field} />}
      </Field>
      <ButtonStyled onClick={subtract} type="button">-</ButtonStyled>
      {value ? <Value>{value}</Value> : value}
      <ButtonStyled onClick={add} type="button">+</ButtonStyled>
    </Wrapper>
  )
};

export default Stepper;