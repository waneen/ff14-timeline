import React, { useState } from 'react';
import styled from 'styled-components';
import ToggleButton from '../common/ToggleButton';

const RightSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <SidebarContainer>
      <SidebarHeader>
        <ToggleButton isOpen={isOpen} onClick={toggleSidebar} />
      </SidebarHeader>
      {isOpen && (
        <Content>
          <p>スキル情報</p>
        </Content>
      )}
    </SidebarContainer>
  );
};

export default RightSidebar;

// Styled Components
const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eee;
  border-right: 1px solid #ccc;
  width: auto;
`;

const SidebarHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5px;
`;

const Content = styled.div`
  padding: 5px;
  flex-grow: 1;
  overflow-y: auto;
  white-space: nowrap;
`;
