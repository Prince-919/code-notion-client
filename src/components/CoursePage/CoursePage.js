import { Box, Grid, Heading, VStack, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getCourseLectures } from '../../redux/actions/course';
import Loader from '../Loader/Loader';

const CoursePage = ({ user }) => {
  const [lectureNumber, setLectureNumber] = useState(0);
  const dispatch = useDispatch();
  const params = useParams();

  const { lectures, loading } = useSelector(state => state.course);

  useEffect(() => {
    dispatch(getCourseLectures(params.id));
  }, [dispatch, params.id]);

  if (
    user.role !== 'admin' &&
    (user.subscription === undefined || user.subscription.status !== 'active')
  ) {
    return <Navigate to="/subscribe" />;
  }
  return loading ? (
    <Loader />
  ) : (
    <Grid minH={'96vh'} templateColumns={['1fr', '3fr 1fr']}>
      {lectures && lectures.length > 0 ? (
        <>
          <Box>
            <video
              width={'100%'}
              controlsList="nodownload noremoteplayback"
              controls
              disablePictureInPicture
              disableRemotePlayback
              src={lectures[lectureNumber]?.video?.url}
            ></video>

            <Heading
              m={'4'}
              children={`#${lectureNumber + 1} ${
                lectures[lectureNumber]?.title
              }`}
            />
            <Heading m={'4'} children={lectures[lectureNumber]?.description} />
          </Box>
          <VStack>
            {lectures.map((item, index) => (
              <button
                onClick={() => setLectureNumber(index)}
                key={item._id}
                style={{
                  width: '100%',
                  padding: '1rem',
                  textAlign: 'center',
                  margin: 0,
                  borderBottom: '1px solid rgba(0,0,0,0.2)',
                }}
              >
                <Text
                  noOfLines={1}
                  children={`#${index + 1} ${item?.description}`}
                />
              </button>
            ))}
          </VStack>
        </>
      ) : (
        <>
          <Box h={'96vh'} ml={'300px'}>
            <Heading children="No Lectures" textAlign={'center'} mt={4} />

            <dotlottie-player
              src="https://lottie.host/f16da384-eaef-4dea-9bc5-5b4b66b269c1/5DsZvTrhkb.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></dotlottie-player>
          </Box>
        </>
      )}
    </Grid>
  );
};

export default CoursePage;
