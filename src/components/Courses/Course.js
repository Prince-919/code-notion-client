import {
  Heading,
  Image,
  VStack,
  Text,
  HStack,
  Stack,
  Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Course = ({
  title,
  description,
  views,
  image,
  id,
  creator,
  handleAddToPlaylist,
  lectureCount,
  loading,
}) => {
  return (
    <VStack
      className="course"
      alignItems={['center', 'flex-start']}
      width={'300px'}
      shadow={'base'}
      px={'4'}
      pb={'6'}
      rounded={'sm'}
    >
      <Image
        src={image}
        boxSize={60}
        objectFit={'contain'}
        mb={'-30px'}
        mt={'-30px'}
        mx={'auto'}
      />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
        size={'sm'}
      />
      <Text noOfLines={4} children={description} />
      <HStack>
        <Text
          children={'Creator'}
          fontWeight={'bold'}
          textTransform={'uppercase'}
        />
        <Text
          children={creator}
          fontFamily={'body'}
          textTransform={'uppercase'}
        />
      </HStack>
      <Heading
        children={`Lectures - ${lectureCount}`}
        textAlign={'center'}
        fontSize={'xs'}
        textTransform={'uppercase'}
      />
      <Heading
        children={`Views - ${views}`}
        fontSize={'xs'}
        textTransform={'uppercase'}
      />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`/course/${id}`}>
          <Button colorScheme="green">Watch Now</Button>
        </Link>
        <Button
          isLoading={loading}
          variant={'ghost'}
          colorScheme="green"
          onClick={() => handleAddToPlaylist(id)}
        >
          Add To Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

export default Course;
