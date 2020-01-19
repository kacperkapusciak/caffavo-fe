import React, { useState } from 'react';
import styled from 'styled-components';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const Form = styled.form`
  height: 46px;
  width: 300px;
  margin-left: 16px;
  font-size: 18px;
  border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  border-radius: 8px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;
  background: ${({ focused, theme }) => focused ? theme.colors.background[200] : theme.colors.white};
`;
const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px 0 0 8px;
  width: 46px;
  color: ${({ theme }) => theme.colors.neutral[400]};
`;
const Input = styled.input`
  border-radius: 0 8px 8px 0;
  height: 100%;
  width: 100%;
  border: 1px solid transparent;
  transition: all 0.3s ease-in-out;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.neutral[400]};
  
  &:focus {
    background: ${({ theme }) => theme.colors.background[200]};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.neutral[200]};
  }
`;

const SearchBar = ({ value, setValue }) => {
  const [focused, setFocused] = useState(false);

  const handleChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const toggleFocus = () => {
    setFocused(!focused);
  };

  return (
    <Form role="search" onSubmit={e => e.preventDefault()} focused={focused}>
      <Label><SearchOutlinedIcon/></Label>
      <Input
        type="text"
        placeholder="Wyszukaj..."
        value={value}
        onChange={handleChange}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
      />
    </Form>
  );
};


export default SearchBar;