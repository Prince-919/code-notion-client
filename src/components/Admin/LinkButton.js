import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const LinkButton = ({ url, Icon, text, active }) => {
  return (
    <Link to={`/admin/${url}`}>
      <Button
        fontSize={'large'}
        variant={'ghost'}
        colorScheme={active ? '#2d55ff' : ''}
      >
        <Icon style={{ margin: '4px' }} />
        {text}
      </Button>
    </Link>
  );
};

export default LinkButton;
