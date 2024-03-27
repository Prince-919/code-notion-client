import {
  Box,
  Grid,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Sidebar from '../Sidebar';
import Row from './Row';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  deleteUser,
  getAllUsers,
  updateUserRole,
} from '../../../redux/actions/admin';
import toast from 'react-hot-toast';

const Users = () => {
  const { users, loading, error, message } = useSelector(state => state.admin);
  const dispatch = useDispatch();

  const handleUpdate = userId => {
    dispatch(updateUserRole(userId));
  };

  const handleDeleteButton = userId => {
    dispatch(deleteUser(userId));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box p={['0', '16']} overflowX={'auto'}>
        <Heading
          children="All Users"
          textTransform={'uppercase'}
          my={'8'}
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All available users in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users &&
                users.map(item => (
                  <Row
                    key={item._id}
                    item={item}
                    handleUpdate={handleUpdate}
                    handleDeleteButton={handleDeleteButton}
                    loading={loading}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;
