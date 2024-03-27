import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { resetPassword } from '../../redux/actions/profile';
import toast from 'react-hot-toast';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const params = useParams();
  const { loading, message, error } = useSelector(state => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(resetPassword(params.token, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.error(message);
      dispatch({ type: 'clearMessage' });
      navigate('/login');
    }
  }, [dispatch, message, error]);
  return (
    <Container minH={'90vh'} py={'16'}>
      <form onSubmit={handleSubmit}>
        <Heading
          children="Reset Password"
          my={'16'}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        />
        <VStack spacing={'8'}>
          <Input
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="New Password"
            type="password"
            focusBorderColor="blue.400"
          />
          <Button
            isLoading={loading}
            type="submit"
            w={'full'}
            colorScheme="telegram"
          >
            Update Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
