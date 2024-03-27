import { Button, Container, Heading, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiErrorWarningFill } from 'react-icons/ri';

const NotFound = () => {
  return (
    <Container h={'96vh'} p={'16'}>
      <VStack justifyContent={'center'} h={'full'} spacing={'4'}>
        <RiErrorWarningFill size={'5rem'} />
        <Heading my={'4'} textAlign={'center'} children="Page Not Found" />
        <Link to="/">
          <Button variant={'ghost'}>Go To Home</Button>
        </Link>
      </VStack>
    </Container>
  );
};

export default NotFound;
