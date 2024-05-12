import {
  Button,
  Container,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Course from './Course';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCourses } from '../../redux/actions/course';
import toast from 'react-hot-toast';
import { addToPlaylist } from '../../redux/actions/profile';
import { loadUser } from './../../redux/actions/user';

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();
  const { loading, courses, error, message } = useSelector(
    state => state.course
  );

  const categories = [
    'Blockchain',
    'NFT Fundamentals',
    'Ethereum',
    'Public blockchain',
  ];

  const handleAddToPlaylist = async courseId => {
    await dispatch(addToPlaylist(courseId));
    dispatch(loadUser());
  };

  useEffect(() => {
    dispatch(getAllCourses(category, keyword));
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.error(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [category, keyword, dispatch, error]);

  return (
    <Container minH="95vh" maxW="container.lg" paddingY="8">
      <Heading children="All NFTs" m="8" />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a course..."
        type="text"
        focusBorderColor="blue.600"
      />

      <HStack
        overflowX="auto"
        paddingY="8"
        css={{
          '&::-webkit-scrollbar': {
            // display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW="60">
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        {courses.length > 0 ? (
          courses?.map(item => (
            <Course
              key={item._id}
              id={item?._id}
              title={item?.title}
              description={item?.description}
              views={item?.views}
              image={item?.poster?.url}
              creator={item?.createdBy}
              lectureCount={item?.numOfVideos}
              handleAddToPlaylist={handleAddToPlaylist}
              loading={loading}
            />
          ))
        ) : (
          <Heading children="Courses Not Found" opacity={0.8} mt={'4'} />
        )}
      </Stack>
    </Container>
  );
};

export default Courses;
