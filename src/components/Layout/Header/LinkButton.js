import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LinkButton = ({ url = '/', onClose, title = 'Home' }) => {
  return (
    <Link onClick={onClose} to={url}>
      <Button variant="ghost">{title}</Button>
    </Link>
  );
};

export default LinkButton;
