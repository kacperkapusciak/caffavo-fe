import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  color: ${({ theme }) => theme.colors.neutral[400]};
  font-weight: bold;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[400]};
  padding: 10px;
  font-size: 16px;
  margin: 10px 0;
`;

export default Input;