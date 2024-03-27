import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const VideoCard = ({
  num,
  title,
  lectureId,
  description,
  courseId,
  handleDeleteButton,
  loading,
}) => {
  return (
    <Stack
      direction={['column', 'row']}
      my={'8'}
      borderRadius={'lg'}
      boxShadow={'0 0 10px #4361ee'}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading size={'sm'} children={`#${num} ${title}`} />
        <Text children={description} />
      </Box>
      <Button
        isLoading={loading}
        color={'#3f37c9'}
        onClick={() => handleDeleteButton(courseId, lectureId)}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
};

export default VideoCard;
