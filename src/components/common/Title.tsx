interface TitleProps {
  title: string;
  description: string;
}

const Title: React.FC<TitleProps> = ({ title, description }) => {
  return (
    <h1>
      {title} <em>{description}</em>
    </h1>
  );
};

export default Title;
