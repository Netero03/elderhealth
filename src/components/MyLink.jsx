import { Link } from 'react-router-dom';

const MyLink = ({ to,children }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
  };

  return (
    <Link to={to} onClick={handleClick}>
      {children}
    </Link>
  );
};

export default MyLink