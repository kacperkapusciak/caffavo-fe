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
  height: 100vh;
  width: 100%;
`;

const Spinner = () => (
  <Wrapper>
    <SpinnerStyled/>
  </Wrapper>
);

export default Spinner;
