import styled from 'styled-components';

const Header = styled.header`
  color: ${({theme}) => theme.colors.neutral[200]};
  font-weight: 800;
  font-size: ${({subheader}) => (subheader ? '28px' : '36px')};
  padding-bottom: 16px;
  margin-bottom: 16px;
`;

export default Header;
