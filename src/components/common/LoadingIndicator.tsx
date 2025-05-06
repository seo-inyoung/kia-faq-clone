import React from 'react';

interface LoadingIndicatorProps {
  text?: string;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  text = '불러오는 중입니다.',
}) => (
  <div className="loading-indicator">
    <i></i> {text}
  </div>
);

export default LoadingIndicator;
