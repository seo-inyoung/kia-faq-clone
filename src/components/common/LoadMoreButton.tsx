import 'src/styles/component/common/loadMoreButton.css';

interface LoadMoreButtonProps {
  onClick: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ onClick }) => {
  return (
    <button type="button" className={'list-more'} onClick={onClick}>
      <i></i>더보기
    </button>
  );
};

export default LoadMoreButton;
