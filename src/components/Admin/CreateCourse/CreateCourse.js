import {
  Container,
  Grid,
  Heading,
  Input,
  Select,
  VStack,
  Image,
  Button,
} from '@chakra-ui/react';
import Sidebar from '../Sidebar';
import { useEffect, useState } from 'react';
import { createCourse } from '../../../redux/actions/admin';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';

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

const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const dispatch = useDispatch();
  const { loading, error, message } = useSelector(state => state.admin);

  const categories = [
    'Blockchain',
    'NFT Fundamentals',
    'Ethereum',
    'Public blockchain',
  ];

  const handleChangeImage = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const handleSubmit = e => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.append('title', title);
    myForm.append('description', description);
    myForm.append('category', category);
    myForm.append('createdBy', createdBy);
    myForm.append('file', image);
    dispatch(createCourse(myForm));
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
  }, [dispatch, error, message]);
  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Container py={'16'}>
        <form onSubmit={handleSubmit}>
          <Heading
            children="Create NFT"
            textTransform={'uppercase'}
            my={'8'}
            textAlign={['center', 'left']}
          />
          <VStack m={'auto'} spacing={'8'}>
            <Input
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              focusBorderColor="#4361ee"
            />
            <Input
              required
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Description"
              type="text"
              focusBorderColor="#4361ee"
            />
            <Input
              required
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              placeholder="Creator Name"
              type="text"
              focusBorderColor="#4361ee"
            />

            <Select
              focusBorderColor="#4361ee"
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value="">Category</option>
              {categories.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Input
              accept="image/*"
              required
              id="chooseAvatar"
              type="file"
              focusBorderColor="#4361ee"
              css={fileUploadStyle}
              onChange={handleChangeImage}
            />
            {imagePrev && (
              <Image src={imagePrev} boxSize={64} objectFit={'contain'} />
            )}
            <Button
              isLoading={loading}
              w={'full'}
              colorScheme="telegram"
              type="submit"
            >
              Create
            </Button>
          </VStack>
        </form>
      </Container>

      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
