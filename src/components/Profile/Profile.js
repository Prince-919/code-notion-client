import {
  Avatar,
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import ChangePhotoBox from './ChangePhotoBox';
import {
  removeFromPlaylist,
  updateProfilePicture,
} from '../../redux/actions/profile';
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from '../../redux/actions/user';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { cancelSubscription } from '../../redux/actions/subscription';

const Profile = ({ user }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const dispatch = useDispatch();
  const { error, message, loading } = useSelector(state => state.profile);
  const {
    error: subscriptionError,
    message: subscriptionMessage,
    loading: subscriptionLoading,
  } = useSelector(state => state.subscription);

  const handleChangeImageSubmit = async (e, image) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('file', image);
    await dispatch(updateProfilePicture(myForm));
    dispatch(loadUser());
  };

  const handleRemoveFromPlaylist = async id => {
    await dispatch(removeFromPlaylist(id));
    dispatch(loadUser());
  };

  const handleCancelSubscription = () => {
    dispatch(cancelSubscription());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    if (subscriptionError) {
      toast.error(subscriptionError);
      dispatch({ type: 'clearError' });
    }
    if (subscriptionMessage) {
      toast.success(subscriptionMessage);
      dispatch({ type: 'clearMessage' });
      dispatch(loadUser());
    }
  }, [dispatch, error, message, subscriptionError, subscriptionMessage]);

  return (
    <Container minH={'95vh'} maxW={'container.lg'} py={'8'}>
      <Heading children="Profile" m={'8'} textTransform={'uppercase'} />
      <Stack
        justifyContent={'flex-start'}
        direction={['column', 'row']}
        alignItems={'center'}
        spacing={['8', '16']}
        padding={'8'}
      >
        <VStack>
          <Avatar boxSize={'48'} src={user?.avatar?.url} />
          <Button onClick={onOpen} colorScheme="telegram" variant={'ghost'}>
            Chnage Photo
          </Button>
        </VStack>
        <VStack spacing={'4'} alignItems={['center', 'flex-start']}>
          <HStack>
            <Text children="Name" fontWeight={'bold'} />
            <Text children={user.name} />
          </HStack>
          <HStack>
            <Text children="Email" fontWeight={'bold'} />
            <Text children={user.email} />
          </HStack>
          <HStack>
            <Text children="CreatedAt" fontWeight={'bold'} />
            <Text children={user.createdAt.split('T')[0]} />
          </HStack>
          {user.role !== 'admin' && (
            <HStack>
              <Text fontWeight={'bold'}>Subscription</Text>
              {user?.subscription?.status === 'active' ? (
                <Button
                  isLoading={subscriptionLoading}
                  onClick={handleCancelSubscription}
                  color={'blue.400'}
                  variant={'unstyled'}
                >
                  Cancel Subscription
                </Button>
              ) : (
                <Link to="/subscribe">
                  <Button colorScheme="telegram"> Subscribe</Button>
                </Link>
              )}
            </HStack>
          )}

          <Stack direction={['column', 'row']} alignItems={'center'}>
            <Link to="/update-profile">
              <Button>Update Profile</Button>
            </Link>
            <Link to="/change-password">
              <Button>Change Password</Button>
            </Link>
          </Stack>
        </VStack>
      </Stack>
      <Heading children="Playlist" size={'md'} my={'8'} />
      {user.playlist.length > 0 && (
        <Stack
          direction={['column', 'row']}
          alignItems={'center'}
          flexWrap={'nowrap'}
          p={'4'}
        >
          {user.playlist.map(item => (
            <VStack w={'48'} m={'2'} key={item.course}>
              <Image src={item.poster} boxSize={'full'} objectFit={'contain'} />
              <HStack>
                <Link to={`/course/${item.course}`}>
                  <Button colorScheme="telegram" variant={'ghost'}>
                    Watch Now
                  </Button>
                </Link>
                <Button
                  isLoading={loading}
                  onClick={() => handleRemoveFromPlaylist(item.course)}
                >
                  <RiDeleteBin7Fill />
                </Button>
              </HStack>
            </VStack>
          ))}
        </Stack>
      )}
      <ChangePhotoBox
        isOpen={isOpen}
        onClose={onClose}
        handleChangeImageSubmit={handleChangeImageSubmit}
        loading={loading}
      />
    </Container>
  );
};

export default Profile;
