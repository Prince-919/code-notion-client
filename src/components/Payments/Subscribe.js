import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { server } from '../../redux/store';
import { buySubscription } from '../../redux/actions/subscription';
import toast from 'react-hot-toast';
import logo from '../../assets/img/notion.png';

const Subscribe = ({ user }) => {
  const dispatch = useDispatch();
  const [key, setKey] = useState('');
  const { loading, error, subscriptionId } = useSelector(
    state => state.subscription
  );
  const { error: courseError } = useSelector(state => state.course);

  const handleSubscribe = async () => {
    const {
      data: { key },
    } = await axios.get(`${server}/razorpay-key`);
    setKey(key);
    dispatch(buySubscription());
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (courseError) {
      toast.error(courseError);
      dispatch({ type: 'clearError' });
    }
    if (subscriptionId) {
      const openPopUp = () => {
        var options = {
          key,
          name: 'Code Notion',
          description: 'Get access to all premium content',
          image: logo,
          subscription_id: subscriptionId,
          callback_url: `${server}/payment-verification`,
          prefill: {
            name: user?.name,
            email: user?.email,
            contact: '',
          },
          notes: {
            address: 'Prince Sharma at youtube',
          },
          theme: {
            color: '#3467e0',
          },
        };

        const razor = new window.Razorpay(options);
        razor.open();
      };
      openPopUp();
    }
  }, [
    dispatch,
    error,
    courseError,
    user.name,
    user.email,
    key,
    subscriptionId,
  ]);

  return (
    <Container h="96vh" p="16">
      <Heading children="Welcome" my="4" textAlign="center" />
      <VStack boxShadow="lg" alignItems="stretch" borderRadius="lg" spacing="0">
        <Box bg={'blue.400'} p={'4'} css={{ borderRadius: '8px 8px 0 0 ' }}>
          <Text color={'black'} children={`Pro Pack - ₹499.00`} />
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text children="Join pro pack and get access to all contents." />
            <Heading size={'md'} children="₹499 Only" />
          </VStack>
          <Button
            isLoading={loading}
            my={'8'}
            w={'full'}
            colorScheme="telegram"
            onClick={handleSubscribe}
          >
            Buy Now
          </Button>
        </Box>
        <Box
          bg={'blackAlpha.600'}
          p={'4'}
          css={{ borderRadius: '0 0 8px 8px' }}
        >
          <Heading
            color={'white'}
            children="100% refund at cancellation"
            size={'sm'}
            textTransform={'uppercase'}
          />
          <Text
            color="white"
            fontSize={'xs'}
            children="*Terms & Conditions Apply"
          />
        </Box>
      </VStack>
    </Container>
  );
};

export default Subscribe;
