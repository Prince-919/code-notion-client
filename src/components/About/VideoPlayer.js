import { Box } from '@chakra-ui/react';
import INTRO_VIDEO from '../../assets/video/intro.mp4';

const VideoPlayer = () => {
  return (
    <Box>
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
    </Box>
  );
};

export default VideoPlayer;
