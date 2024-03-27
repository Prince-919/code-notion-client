import { Avatar, Stack, VStack, Text, Heading } from '@chakra-ui/react';
import ADMIN_PICTURE from '../../assets/img/admin.png';

const Founder = () => {
  return (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
      <VStack>
        <Avatar src={ADMIN_PICTURE} boxSize={['40', '48']} />
        <Text children="Co-Founder" opacity={0.7} />
      </VStack>
      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading children="Prince Sharma" size={['md', 'xl']} />
        <Text
          textAlign={['center', 'left']}
          children="Hi, i am full stack developer. Our mission is to provide quality content at reasonable price."
        />
      </VStack>
    </Stack>
  );
};

export default Founder;
