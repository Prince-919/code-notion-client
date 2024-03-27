import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  VStack,
} from '@chakra-ui/react';
import VideoCard from './VideoCard';
import { useState } from 'react';

const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#4361ee',
  backgroundColor: 'white',
};

const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,
};

const CourseModal = ({
  isOpen,
  onClose,
  id,
  handleDeleteButton,
  handleAddLecture,
  courseTitle,
  lectures = [],
  loading,
}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [videoPrev, setVideoPrev] = useState('');

  const handleChangeVideo = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setVideo(file);
    };
  };

  const handleClose = () => {
    setTitle('');
    setDescription('');
    setVideo('');
    setVideoPrev('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      size={'full'}
      onClose={handleClose}
      scrollBehavior="outside"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton onClick={onClose} />
        <ModalBody p={'16'}>
          <Grid templateColumns={['1fr', '3fr 1fr']}>
            <Box px={['0', '16']}>
              <Box my={'5'}>
                <Heading children={courseTitle} />
                <Heading children={`#${id}`} size={'sm'} opacity={0.4} />
              </Box>
              <Heading children={'Lectures'} size={'lg'} />
              {lectures.map((item, i) => (
                <VideoCard
                  key={item._id}
                  num={i + 1}
                  title={item?.title}
                  description={item?.description}
                  lectureId={item?._id}
                  courseId={id}
                  handleDeleteButton={handleDeleteButton}
                  loading={loading}
                />
              ))}
            </Box>

            <Box>
              <form
                onSubmit={e =>
                  handleAddLecture(e, id, title, description, video)
                }
              >
                <VStack spacing={'4'}>
                  <Heading
                    children={'Add Lecture'}
                    size={'md'}
                    textTransform={'uppercase'}
                  />
                  <Input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Title"
                    focusBorderColor="blue.400"
                  />
                  <Input
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Description"
                    focusBorderColor="blue.400"
                  />
                  <Input
                    accept="video/mp4"
                    required
                    id="chooseAvatar"
                    type="file"
                    focusBorderColor="#4361ee"
                    css={fileUploadStyle}
                    onChange={handleChangeVideo}
                  />

                  {videoPrev && (
                    <video
                      controlsList="nodownload"
                      controls
                      src={videoPrev}
                    ></video>
                  )}
                  <Button
                    isLoading={loading}
                    type="submit"
                    w={'full'}
                    colorScheme="telegram"
                  >
                    Upload
                  </Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseModal;
