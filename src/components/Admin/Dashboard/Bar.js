import { Box, Heading, HStack, Progress, Text } from '@chakra-ui/react';

const Bar = ({ title, value, profit }) => {
  return (
    <Box py={'4'} px={['0', '20']}>
      <Heading children={title} size={'sm'} mb={'2'} />
      <HStack w={'full'} alignItems={'center'}>
        <Text children={profit ? '0%' : `-${value}%`} />
        <Progress value={profit ? value : 0} w={'full'} colorScheme="blue" />
        <Text children={`${value > 100 ? value : 100}%`} />
      </HStack>
    </Box>
  );
};

export default Bar;
