import React from 'react';

interface HtmlViewerProps {
  html: string;
  className?: string;
}

const HtmlViewer: React.FC<HtmlViewerProps> = ({ html, className }) => (
  <div className={`${className}`} dangerouslySetInnerHTML={{ __html: html }} />
);

export default HtmlViewer;
