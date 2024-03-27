import { Spinner, VStack } from '@chakra-ui/react';

const Loader = ({ color = 'blue.500' }) => {
  return (
    <VStack h={'100vh'} justifyContent={'center'}>
      <div
        style={{
          transform: 'scale(1.5)',
        }}
      >
        <Spinner
          thickness="2px"
          speed="0.65s"
          emptyColor="transparent"
          color={color}
          size="xl"
        />
      </div>
    </VStack>
  );
};

export default Loader;
