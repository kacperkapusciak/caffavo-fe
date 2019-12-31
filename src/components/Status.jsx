import React from 'react';
import styled from 'styled-components';

import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import Center from "components/Center";

const IconWrapper = styled.div`
  height: 20px;
  width: 20px;
  color: ${({ theme, status }) => {
  switch (status) {
    case 'dostepny':
      return theme.colors.success;
    case 'niska_dostepnosc':
      return theme.colors.warning;
    case 'niedostepny':
      return theme.colors.danger;
    default: 
      return theme.colors.danger;
  }
}}
`;

const Status = ({ status }) => {
  const icon = {
    'dostepny': <CheckCircleOutlineOutlinedIcon/>,
    'niska_dostepnosc': <ErrorOutlineOutlinedIcon/>,
    'niedostepny': <CancelOutlinedIcon/>,
  }[status];

  return (
    <Center>
      <IconWrapper status={status}>{icon}</IconWrapper>
    </Center>
  )
};

export default Status;
