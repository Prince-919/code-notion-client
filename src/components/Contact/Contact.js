import {
  Box,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
  Button,
  Textarea,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { contactUs } from '../../redux/actions/other';
import toast from 'react-hot-toast';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const {
    loading,
    message: stateMessage,
    error,
  } = useSelector(state => state.other);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (stateMessage) {
      toast.success(stateMessage);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, stateMessage, error]);
  return (
    <Container minH={'92vh'}>
      <VStack h={'full'} justifyContent={'center'} py={'16'}>
        <Heading children="Contact Us" />
        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
          }}
        >
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              type="name"
              focusBorderColor="blue.400"
            />
          </Box>
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
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your Message..."
              type="text"
              focusBorderColor="blue.400"
            />
          </Box>

          <Button
            isLoading={loading}
            my={'4'}
            type="submit"
            colorScheme="telegram"
          >
            Send Mail
          </Button>
          <Box>
            Request for course
            <Link to="/request">
              <Button fontSize={'sm'} colorScheme="telegram" variant={'link'}>
                Click
              </Button>
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
