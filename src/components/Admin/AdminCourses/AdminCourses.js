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
  useDisclosure,
} from '@chakra-ui/react';
import Sidebar from '../Sidebar';
import Row from './Row';
import CourseModal from './CourseModal';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  getAllCourses,
  getCourseLectures,
} from '../../../redux/actions/course';
import {
  addLecture,
  deleteCourse,
  deleteLecture,
} from '../../../redux/actions/admin';
import toast from 'react-hot-toast';

const AdminCourses = () => {
  const { courses, lectures } = useSelector(state => state.course);
  const { loading, error, message } = useSelector(state => state.admin);
  const dispatch = useDispatch();

  const { isOpen, onClose, onOpen } = useDisclosure();
  const [courseId, setCourseId] = useState('');
  const [courseTitle, setCourseTitle] = useState('');

  const handleCourseDetails = (courseId, title) => {
    dispatch(getCourseLectures(courseId));
    onOpen();
    setCourseId(courseId);
    setCourseTitle(title);
  };

  const handleDeleteButton = courseId => {
    dispatch(deleteCourse(courseId));
  };

  const handleDeleteLectureButton = async (courseId, lectureId) => {
    await dispatch(deleteLecture(courseId, lectureId));
    dispatch(getCourseLectures(courseId));
  };

  const handleAddLecture = async (e, courseId, title, description, video) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('title', title);
    myForm.append('description', description);
    myForm.append('file', video);
    await dispatch(addLecture(courseId, myForm));
    dispatch(getCourseLectures(courseId));
  };

  useEffect(() => {
    dispatch(getAllCourses());
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, message, error]);

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box p={['0', '8']} overflowX={'auto'}>
        <Heading
          children="All NFTs"
          textTransform={'uppercase'}
          my={'8'}
          textAlign={['center', 'left']}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All available NFTs in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Creator</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Lectures</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {courses.map(item => (
                <Row
                  key={item._id}
                  item={item}
                  handleCourseDetails={handleCourseDetails}
                  handleDeleteButton={handleDeleteButton}
                  loading={loading}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <CourseModal
          isOpen={isOpen}
          onClose={onClose}
          id={courseId}
          courseTitle={courseTitle}
          handleDeleteButton={handleDeleteLectureButton}
          handleAddLecture={handleAddLecture}
          lectures={lectures}
          loading={loading}
        />
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;
