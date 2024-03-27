import {
  Box,
  Container,
  Heading,
  VStack,
  Text,
  Button,
} from '@chakra-ui/react';
import { RiCheckboxCircleFill } from 'react-icons/ri';
import { Link, useSearchParams } from 'react-router-dom';

const PaymentSuccess = () => {
  const reference = useSearchParams()[0].get('reference');

  return (
    <Container h={'96vh'} p={'16'}>
      <Heading my={'4'} textAlign={'center'} children="You have Pro Pack " />
      <VStack
        boxShadow={'lg'}
        pb={'16'}
        alignItems={'center'}
        borderRadius={'lg'}
      >
        <Box
          bg={'blue.400'}
          w={'full'}
          p={'4'}
          css={{ borderRadius: '8px 8px 0 0' }}
        >
          <Text color={'black'} children={'Payment Success'} />
        </Box>
        <Box p={'4'}>
          <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'}>
            <Text children="Congratulaion you are a pro member. You have access to premium content." />

            <Heading size={'4xl'} children={<RiCheckboxCircleFill />} />
          </VStack>
        </Box>
        <Link to="/profile">
          <Button variant={'ghost'}>Go To Profile</Button>
        </Link>
        <Heading size="xs">Reference : {reference}</Heading>
      </VStack>
    </Container>
  );
};

export default PaymentSuccess;
