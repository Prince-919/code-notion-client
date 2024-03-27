import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePassword } from '../../redux/actions/profile';
import toast from 'react-hot-toast';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [oldPassword, setOldPassword] = useState('');

  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(changePassword(oldPassword, newPassword));
  };

  const { error, message, loading } = useSelector(state => state.profile);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <Container minH={'96vh'} py={'16'}>
      <form onSubmit={handleSubmit}>
        <Heading
          children="Change Password"
          my={'8'}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        />

        <VStack spacing={'8'}>
          <Input
            required
            value={oldPassword}
            onChange={e => setOldPassword(e.target.value)}
            placeholder="Old Password"
            type="password"
            focusBorderColor="blue.400"
          />
          <Input
            required
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
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
            Change
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ChangePassword;
