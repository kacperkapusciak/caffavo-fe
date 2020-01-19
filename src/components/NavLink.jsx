import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.neutral[300]};
  text-decoration: none;
  font-weight: 700;
  font-size: 21px;
  padding: 10px 0;
  margin: 10px 0;
  border: 1px solid ${({ theme, active }) => active ? theme.colors.neutral[200] : 'transparent'};
  background: ${({ theme, active }) => active ? theme.colors.background[200] : 'transparent'} ;
  border-radius: 5px;

  &:link {
    color: ${({ theme }) => theme.colors.neutral[300]};
  }
  &:visited {
    color: ${({ theme }) => theme.colors.neutral[300]};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.neutral[300]};
    text-decoration: none;
    cursor: pointer;
    background: ${({ theme }) => theme.colors.background[200]};
  }
  &:active {
    border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
    background: ${({ theme }) => theme.colors.background[400]};
  }
`;

const Text = styled.div`
  margin-left: 6px;
`;

const IconWrapper = styled.div`
  margin-left: 5px;
  svg {
    height: 31px;
    width: 31px;
  }
`;

const NavLink = ({ to, active, icon, text }) => (
  <Wrapper to={to} active={active}>
    <IconWrapper>{icon}</IconWrapper>
    <Text>{text}</Text>
  </Wrapper>
);

export default NavLink;
