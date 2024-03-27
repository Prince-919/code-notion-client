import { Box, Heading, Text } from '@chakra-ui/react';

const TermsAndConditions = ({ termsAndCondition }) => {
  return (
    <Box>
      <Heading
        children="Terms & Condition"
        size={'md'}
        textAlign={('center', 'left')}
        my={'4'}
      />
      <Box h={'sm'} p={'4'} overflowY={'scroll'}>
        <Text
          fontFamily={'heading'}
          letterSpacing={'widest'}
          textAlign={['center', 'left']}
        >
          {termsAndCondition}
        </Text>
        <Heading
          my={'4'}
          size={'xs'}
          children="Refund only applicable fro cancellation within 7 days."
        />
      </Box>
    </Box>
  );
};

export default TermsAndConditions;
