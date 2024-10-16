import React from 'react';
import styled from 'styled-components';
import LeftSidebar from '../sidebar/LeftSidebar.tsx';
import Timeline from '../timeline/Timeline';
import RightSidebar from '../sidebar/RightSidebar';

const Main: React.FC = () => {
  return (
    <MainContainer>
      <LeftSidebar />
      <TimelineWrapper>
        <Timeline />
      </TimelineWrapper>
      <RightSidebar />
    </MainContainer>
  );
};

export default Main;

// Styled Components
const MainContainer = styled.div`
  display: flex;
  flex-grow: 1;
  overflow-y: auto; // 縦スクロール対応
`;

const TimelineWrapper = styled.div`
  flex-grow: 1;
  overflow-x: auto; // 横スクロール対応
  background-color: #f4f4f4;
  //   padding: 10px;
`;
