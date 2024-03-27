import {
  Avatar,
  Button,
  Container,
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
import { useState } from 'react';

const fileUploadCss = {
  cursor: 'pointer',
  marginLeft: '-5%',
  width: '110%',
  border: 'none',
  height: '100%',
  color: '#023e8a',
  backgroundColor: 'white',
};

const fileUploadStyle = {
  '&::file-selector-button': fileUploadCss,
};

const ChangePhotoBox = ({
  isOpen,
  onClose,
  handleChangeImageSubmit,
  loading,
}) => {
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');

  const handleChangeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const handleClose = () => {
    onClose();
    setImagePrev('');
    setImage('');
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <ModalOverlay backdropFilter={'blur(10px)'} />
      <ModalContent>
        <ModalHeader>Change Photo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Container>
            <form onSubmit={e => handleChangeImageSubmit(e, image)}>
              <VStack spacing={'8'}>
                {imagePrev && <Avatar src={imagePrev} boxSize={'48'} />}
                <Input
                  type="file"
                  css={fileUploadStyle}
                  onChange={handleChangeImage}
                />
                <Button
                  isLoading={loading}
                  type="submit"
                  w={'full'}
                  colorScheme="telegram"
                >
                  Change
                </Button>
              </VStack>
            </form>
          </Container>
        </ModalBody>
        <ModalFooter mr={'3'} onClick={handleClose}>
          Cancel
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ChangePhotoBox;
