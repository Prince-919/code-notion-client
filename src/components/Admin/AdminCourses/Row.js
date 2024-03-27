import { Button, HStack, Image, Td, Tr } from '@chakra-ui/react';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const Row = ({ item, handleCourseDetails, handleDeleteButton, loading }) => {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td>{item.createdBy}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>{item.numOfVideos}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            isLoading={loading}
            onClick={() => handleCourseDetails(item._id, item.title)}
            variant={'outline'}
            color={'#4361ee'}
          >
            View Lectures
          </Button>
          <Button
            isLoading={loading}
            onClick={() => handleDeleteButton(item._id)}
            color={'#3f37c9'}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
};

export default Row;
