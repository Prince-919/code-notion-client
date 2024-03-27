import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import './home.css';
import { Link } from 'react-router-dom';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';
import INTRO_VIDEO from '../../assets/video/intro.mp4';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '36']}
        >
          <VStack
            width="full"
            alignItems={['center', 'flex-end']}
            spacing={'2'}
          >
            <Heading children="Explore Learning Online" size="xl" />
            <Text
              fontSize="xl"
              fontFamily="cursive"
              textAlign={['center', 'left']}
              children="Want to be a Mern Stack Expert?"
            />

            <Link to="/courses">
              <Button colorScheme="telegram" size="lg">
                Get Started
              </Button>
            </Link>
          </VStack>

          <dotlottie-player
            src="https://lottie.host/fb6407d6-370f-4d55-bb55-a97a59f4c1f8/d9Mlzx0vzo.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>

          {/* <dotlottie-player
            src="https://lottie.host/embed/961c24bb-3ad2-407c-9fb5-ff2f4c423fea/H1B1MZK7Sy.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player> */}
        </Stack>
      </div>
      <Box padding={'8'} bg={'blue.900'}>
        <Heading color={'white'} textAlign={'center'} children="OUR BRANDS" />
        <HStack
          className="brand"
          justifyContent={'space-evenly'}
          marginTop={'4'}
        >
          <CgGoogle />
          <CgYoutube />
          <SiCoursera />
          <SiUdemy />
          <DiAws />
        </HStack>
      </Box>
      <div className="container-2">
        <video
          autoPlay
          muted
          loop
          controlsList="nodownload nofullscreen noremoteplayback"
          controls
          disablePictureInPicture
          disableRemotePlayback
          src={INTRO_VIDEO}
        ></video>
      </div>
    </section>
  );
};

export default Home;
