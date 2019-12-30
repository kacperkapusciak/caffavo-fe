import React from 'react';
import Select from 'react-select';

import theme from 'styles/theme'

const bgColor = theme.colors.background[200];
const dark = theme.colors.neutral[400];

const customStyles = {
  control: (provided) => ({
    ...provided,
    height: '40px',
    margin: '10px 0',
    borderRadius: 0,
    boxShadow: 'none',
    borderColor: 'transparent',
    borderBottomWidth: '1px',
    borderBottomColor: dark,
    background: 'transparent',
    '&:hover': {
      borderColor: 'transparent',
      borderBottomColor: dark,
    },
  }),
  menu: provided => ({
    ...provided,
    maxWidth: '307px',
    borderRadius: 0,
    zIndex: 5,
    '@media (max-width: 575.98px)': {
      width: '100%',
    },
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    svg: {
      color: dark,
    },
  }),
  option: (provided, {isFocused, isSelected}) => ({
    ...provided,
    background: isFocused || isSelected ? bgColor : 'none',
    color: dark,
  }),
};

export default ({ options, field, form }) => (
  <Select
    options={options}
    styles={customStyles}
    name={field.name}
    value={options ? options.find(option => option.value === field.value) : ''}
    onChange={option => form.setFieldValue(field.name, option.value)}
    onBlur={field.onBlur}
  />
);