import { Box, Heading, Stack, VStack, HStack } from '@chakra-ui/react';
import {
  TiSocialInstagramCircular,
  TiSocialYoutubeCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} minH={'10vh'} bg={'blue.900'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width={'full'}>
          <Heading children="All Rights Reserved" color={'white'} />
          <Heading
            children="@Prince Sharma"
            color={'green.400'}
            fontSize={'sm'}
            fontFamily={'body'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent={'center'}
          color={'white'}
          fontSize={'60'}
        >
          <a
            href="https://www.youtube.com/channel/UCIedA9P_z-09yXlM1dGdCFQ"
            target="_blank"
          >
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <TiSocialInstagramCircular />
          </a>
          <a href="https://www.github.com/Prince-919" target="_blank">
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
