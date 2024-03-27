import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async e => {
    e.preventDefault();
    await dispatch(updateProfile(name, email));
    dispatch(loadUser());
    navigate('/profile');
  };

  const { loading } = useSelector(state => state.profile);

  return (
    <Container minH={'96vh'} py={'16'}>
      <form onSubmit={handleSubmit}>
        <Heading
          children="Update Profile"
          my={'8'}
          textAlign={['center', 'left']}
          textTransform={'uppercase'}
        />

        <VStack spacing={'8'}>
          <Input
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Name"
            type="text"
            focusBorderColor="blue.400"
          />
          <Input
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            focusBorderColor="blue.400"
          />
          <Button
            isLoading={loading}
            type="submit"
            w={'full'}
            colorScheme="telegram"
          >
            Update
          </Button>
        </VStack>
      </form>
    </Container>
  );
};
export default UpdateProfile;
