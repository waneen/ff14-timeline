import React from 'react';
import styled from 'styled-components';
import Header from './Header.tsx';
import Main from './Main.tsx';

const AppLayout: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
};

export default AppLayout;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;
