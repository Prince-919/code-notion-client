import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin } from '../../redux/actions/user';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  return (
    <Container minH={'95vh'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'12'}>
        <Heading children="Welcome To Code Notion" mt={'24'} />
        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
          }}
        >
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              type="email"
              focusBorderColor="blue.400"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="********"
              type="password"
              focusBorderColor="blue.400"
            />
          </Box>
          <Box>
            <Link to="/forget-password">
              <Button fontSize={'sm'} variant={'link'}>
                Forget password
              </Button>
            </Link>
          </Box>

          <Button my={'4'} type="submit" colorScheme="telegram">
            Sign In
          </Button>
          <Box>
            Do not have an account?{' '}
            <Link to="/sign-up">
              <Button fontSize={'sm'} colorScheme="telegram" variant={'link'}>
                Sign Up
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default SignIn;
