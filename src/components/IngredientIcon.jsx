import React from 'react';
import styled from 'styled-components';
import Center from "components/Center";

import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import InvertColorsOutlinedIcon from '@material-ui/icons/InvertColorsOutlined';
import StopOutlinedIcon from '@material-ui/icons/StopOutlined';

const IconWrapper = styled.div`
  height: 20px;
  width: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

const IngredientIcon = ({ unit }) => {
  const icon = {
    'kilogram': <DashboardOutlinedIcon/>,
    'litr': <InvertColorsOutlinedIcon/>,
    'kostka': <StopOutlinedIcon/>,
  }[unit];

  return (
    <Center>
      <IconWrapper>{icon}</IconWrapper>
    </Center>
  )
};

export default IngredientIcon;