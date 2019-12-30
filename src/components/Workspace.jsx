import React from 'react';
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr 375px;
`;
const Details = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 48px 48px 0;
  height: 100vh;
  overflow: auto;
`;
const Edit = styled.div`
  background: ${({ theme }) => theme.colors.background[200]};
  padding: 48px 40px;
`;
const Workspace = ({ children }) => (
  <Layout>
    <Details>{children[0]}</Details>
    <Edit>{children[1]}</Edit>
  </Layout>
);

export default Workspace;
