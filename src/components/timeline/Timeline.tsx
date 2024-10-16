import React from 'react';
import styled from 'styled-components';

const Timeline: React.FC = () => {
  return (
    <TimelineContainer>
      {/* タイムラインの内容をここに追加 */}
      <p>時間軸でスキル使用を表示</p>
    </TimelineContainer>
  );
};

export default Timeline;

// Styled Components
const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 2000px; // 横スクロールのために幅を大きく設定
  background-color: #fff;
  border: 1px solid #ccc;
`;
