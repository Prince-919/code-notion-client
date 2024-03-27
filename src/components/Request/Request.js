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
import { courseRequest } from '../../redux/actions/other';
import toast from 'react-hot-toast';

const Request = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const dispatch = useDispatch();
  const {
    loading,
    message: stateMessage,
    error,
  } = useSelector(state => state.other);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(courseRequest(name, email, course));
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
        <Heading children="Request New Course" />
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
            <FormLabel htmlFor="course" children="Message" />
            <Textarea
              required
              id="course"
              value={course}
              onChange={e => setCourse(e.target.value)}
              placeholder="Explain the course..."
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
            See available courses!
            <Link to="/courses">
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

export default Request;
