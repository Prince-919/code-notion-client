import {
  Button,
  Container,
  HStack,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react';
import Founder from './Founder';
import { Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import { RiSecurePaymentFill } from 'react-icons/ri';
import TermsAndConditions from './TermsAndConditions';
import { data } from '../../assets/docs/termsAndCondition';

const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack direction={['column', 'row']} m={'8'} alignItems={'center'}>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          We are a video streaming platform with som premium courses avialable
          only for premium users.
        </Text>
        <Link to="/subscribe">
          <Button variant={'ghost'} colorScheme="telegram">
            Checkout Out Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />

      <TermsAndConditions termsAndCondition={data} />
      <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          size={'xs'}
          fontFamily={'sans-serif'}
          textTransform={'uppercase'}
          children="Payment is secured by Razorpay"
        />
      </HStack>
    </Container>
  );
};

export default About;
