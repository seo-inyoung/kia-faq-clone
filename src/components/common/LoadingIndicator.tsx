import React from 'react';
import 'src/styles/component/common/loadingIndicator.css';

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
