import styled from 'styled-components';

const Header = styled.h1`
  color: ${({ theme }) => theme.colors.neutral[200]};
  font-weight: 800;
  font-size: ${({ huge, subheader }) => (subheader ? '28px' : huge ? '48px' : '36px')};
  padding-bottom: 16px;
  margin-bottom: 16px;
`;

export default Header;
