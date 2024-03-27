import { Box, HStack, Text } from '@chakra-ui/react';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';

const DataBox = ({ title, qty, qtyPercentage, profile }) => {
  return (
    <Box
      w={['full', '20%']}
      boxShadow={'-2px 0 10px rgba(45, 85, 255, 0.5)'}
      p={'6'}
      borderRadius={'lg'}
    >
      <Text children={title} />

      <HStack spacing={'6'}>
        <Text fontSize={'2xl'} fontWeight={'bold'} children={qty} />
        <HStack>
          <Text children={`${qtyPercentage}%`} />
          {profile ? (
            <RiArrowUpLine color="green" />
          ) : (
            <RiArrowDownLine color="red" />
          )}
        </HStack>
      </HStack>
      <Text children={'Since Last Month'} opacity={0.6} />
    </Box>
  );
};

export default DataBox;
