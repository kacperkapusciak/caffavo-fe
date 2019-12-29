import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 35px;
  margin: 0;
  color: ${({ theme, primary }) => (primary ? theme.colors.white : theme.colors.primary)};
  background: ${({ theme, primary }) => (primary ? theme.colors.primary : theme.colors.neutral[200])};
  font-weight: bold;
  font-size: ${({ primary }) => (primary ? '18px' : '15px')}
  transition: all 0.2s ease;
  width: ${({ unsized }) => (unsized ? '100%' : 'unset')};
  border: none;
`;

export default Button;