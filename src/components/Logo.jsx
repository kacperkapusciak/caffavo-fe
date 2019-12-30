import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:700&display=swap');
  font-family: 'Josefin Sans', sans-serif;
  font-size: 52px;
  letter-spacing: -3px;
  margin: 10px 9px 0 auto;
  color: ${({ theme }) => theme.colors.black};
  border-bottom: 6px solid ${({ theme }) => theme.colors.secondary};
  border-bottom-right-radius: 15px;
  border-left: 9px solid transparent;
  line-height: 30px;
  user-select: none;
  
  &:hover {
    cursor: pointer;
  }
`;

const Closer = styled.span`
  letter-spacing: -5px;
`;

const Logo = () => {
  const history = useHistory();

  return (
    <Wrapper onClick={() => history.push('/offer')}>
      Ca<Closer>ff</Closer>avo
    </Wrapper>
  )
};

export default Logo;
