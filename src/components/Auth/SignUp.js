import {
  Avatar,
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signup } from '../../redux/actions/user';

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

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

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
    myForm.append('name', name);
    myForm.append('email', email);
    myForm.append('password', password);
    myForm.append('file', image);
    dispatch(signup(myForm));
  };

  return (
    <Container minH={'95vh'} mb={'10'}>
      <VStack h={'full'} justifyContent={'center'} spacing={'12'}>
        <Heading
          textTransform={'uppercase'}
          children="Registration"
          mt={'24'}
        />
        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
          }}
        >
          <Box my={'4'} display={'flex'} justifyContent={'center'}>
            <Avatar src={imagePrev} size={'2xl'} />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Name"
              type="text"
              focusBorderColor="blue.400"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              type="email"
              focusBorderColor="blue.400"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="password" children="Password" />
            <Input
              required
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="********"
              type="password"
              focusBorderColor="blue.400"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="avatar" children="Choose Avatar" />
            <Input
              accept="image/*"
              required
              id="chooseAvatar"
              type="file"
              focusBorderColor="blue.400"
              css={fileUploadStyle}
              onChange={handleChangeImage}
            />
          </Box>

          <Button my={'4'} type="submit" colorScheme="telegram">
            Sign Up
          </Button>
          <Box>
            Already have an account?{' '}
            <Link to="/sign-in">
              <Button fontSize={'sm'} colorScheme="telegram" variant={'link'}>
                Sign In
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default SignUp;
