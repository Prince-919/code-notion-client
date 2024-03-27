import { Button, HStack, Td, Tr } from '@chakra-ui/react';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const Row = ({ item, handleUpdate, handleDeleteButton, loading }) => {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>
        {item?.subscription?.status === 'active' ? 'Active' : 'Not Active'}
      </Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            isLoading={loading}
            onClick={() => handleUpdate(item._id)}
            variant={'outline'}
            color={'#4361ee'}
          >
            Change Role
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
