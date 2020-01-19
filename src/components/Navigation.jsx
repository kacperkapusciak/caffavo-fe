import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import axios from 'axios-instance';

import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import AttachMoneyOutlinedIcon from '@material-ui/icons/AttachMoneyOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import ExtensionOutlinedIcon from '@material-ui/icons/ExtensionOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';

import { withAuth } from "providers/AuthProvider";

import Logo from 'components/Logo';
import Button from 'components/Button';
import NavLink from "components/NavLink";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  border-right: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  padding: 32px 28px;
  max-width: 256px;
`;
const Email = styled.p`
  width: 100%;
  min-height: 36px;
  padding-bottom: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[400]};
  font-weight: bold;
`;

const Navigation = ({ auth }) => {
  const { pathname } = useLocation();
  const [email, setEmail] = useState('');

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`users/${auth.id}`);
      if (data) setEmail(data.email);
    })();
  }, []);

  const userLinks = [
    <NavLink to="/offer" icon={<LocalOfferOutlinedIcon/>} text="Oferta" key="oferta"/>,
    <NavLink to="/account" icon={<AccountCircleOutlinedIcon/>} text="Moje konto" key="mojeKonto"/>,
    <NavLink to="/orders" icon={<ShoppingCartOutlinedIcon/>} text="Zamówienia" key="zamowienia"/>
  ];

  const adminLinks = [
    <NavLink to="/finances" icon={<AttachMoneyOutlinedIcon/>} text="Finanse" key="finanse"/>,
    <NavLink to="/users" icon={<PeopleAltOutlinedIcon/>} text="Użytkownicy" key="uzytkownicy"/>,
    <NavLink to="/ingredients" icon={<ExtensionOutlinedIcon/>} text="Składniki" key="skladniki"/>,
    <NavLink to="/recipes" icon={<MenuBookOutlinedIcon/>} text="Przepisy" key="przepisy"/>
  ];

  const navigationLinks = auth.admin ? [...userLinks, ...adminLinks] : [...userLinks];
  const mappedNavigationLinks = navigationLinks.map(link => {
    return link.props.to === pathname ? <NavLink {...link.props} active="true" key="current"/> : link;
  });

  return (
    <Wrapper>
      <Logo/>
      <div>
        {mappedNavigationLinks}
      </div>
      <div>
        <Email>{email}</Email>
        <Button unsized onClick={auth.logout}>Wyloguj się</Button>
      </div>
    </Wrapper>
  )
};

export default withAuth(Navigation);