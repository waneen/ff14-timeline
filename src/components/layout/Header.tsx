import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <h1>FF14 軽減管理</h1>
    </HeaderContainer>
  );
};

export default Header;

// Styled Components
const HeaderContainer = styled.header`
  height: 60px;
  background-color: #333;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;
