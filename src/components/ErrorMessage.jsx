import React from 'react';
import {ErrorMessage} from 'formik';
import styled from 'styled-components';

export const ErrorMessageStyled = styled.div`
  min-height: 16px;
  margin-bottom: 10px;
  font-size: 14px;
  color: ${({theme}) => theme.colors.secondary};
`;

export default props => (
  <ErrorMessageStyled>
    <ErrorMessage {...props} />
  </ErrorMessageStyled>
);