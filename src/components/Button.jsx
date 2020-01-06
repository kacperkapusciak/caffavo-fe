import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 35px;
  margin: 0;
  color: ${({ theme, primary }) => (primary ? theme.colors.white : theme.colors.primary)};
  background: ${({ theme, primary }) => (primary ? theme.colors.primary : theme.colors.background[200])};
  font-weight: bold;
  font-size: ${({ primary }) => (primary ? '18px' : '15px')}
  transition: all 0.2s ease;
  width: ${({ unsized }) => (unsized ? '100%' : 'unset')};
  height: 50px;
  border: 2px solid ${({theme}) => theme.colors.primary};
  
  &:hover {
    transform: scale(1.04);
    cursor: pointer;
  }
  &:active {
    transform: scale(1.015);
  }
  &:disabled {
    color: ${({theme}) => theme.colors.neutral[400]};
    background: ${({theme}) => theme.colors.neutral[300]};
    border: 2px solid ${({theme}) => theme.colors.neutral[300]};
    transform: scale(1);
    cursor: not-allowed;
  }
`;

export default Button;