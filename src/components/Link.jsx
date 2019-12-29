import { Link } from "react-router-dom";
import styled from 'styled-components';

export default styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:link {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:visited {
    color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: underline;
    cursor: pointer;
  }
  &:active {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
