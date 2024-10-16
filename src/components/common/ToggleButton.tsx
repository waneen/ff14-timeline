// ToggleButton.tsx
import React from 'react';
import styled from 'styled-components';

interface ToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ isOpen, onClick }) => {
  return (
    <Button onClick={onClick}>
      <Circle>
        {isOpen ? (
          <MinusIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <rect x="5" y="11" width="14" height="2" fill="currentColor" />
          </MinusIcon>
        ) : (
          <PlusIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <rect x="11" y="5" width="2" height="14" fill="currentColor" />
            <rect x="5" y="11" width="14" height="2" fill="currentColor" />
          </PlusIcon>
        )}
      </Circle>
    </Button>
  );
};

export default ToggleButton;

// Styled Components
const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:focus {
    outline: none;
  }
`;

const Circle = styled.div`
  width: 30px; // 小さくする
  height: 30px; // 小さくする
  border-radius: 50%;
  border: 2px solid currentColor;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
`;

const MinusIcon = styled.svg`
  width: 16px; // アイコンも少し小さく
  height: 16px;
`;

const PlusIcon = styled.svg`
  width: 16px; // アイコンも少し小さく
  height: 16px;
`;
