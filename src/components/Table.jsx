import styled from 'styled-components';

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr 85px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0 20px;
  color: ${({theme}) => theme.colors.neutral[400]};
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr 85px;
  align-items: center;
  background: ${({theme}) => theme.colors.white};
  border: 1px solid transparent;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  padding: 20px 12px;
  margin: 8px 0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.22);
  transform: ${({active}) => active ? 'scale(1.025)' : 'scale(1)'};
  user-select: none;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
  &:active {
    transform: scale(1.035);
  }
`;
