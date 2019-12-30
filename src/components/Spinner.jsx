import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';

const SpinnerStyled = styled(CircularProgress)`
  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({wholePage}) => wholePage ? '100vh' : '100%'};
  width: 100%;
`;

const Spinner = ({wholePage}) => (
  <Wrapper wholePage={wholePage}>
    <SpinnerStyled/>
  </Wrapper>
);

export default Spinner;
