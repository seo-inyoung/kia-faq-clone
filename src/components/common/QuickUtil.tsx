'use client';
import { useEffect, useState } from 'react';

const QuickUtil: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`quick-util ${!show && 'hide'}`}>
      <div className="inner">
        <button
          type="button"
          className="top"
          data-ui-click="scroll-top"
          onClick={handleTopClick}
        >
          상단으로
        </button>
      </div>
    </div>
  );
};

export default QuickUtil;
