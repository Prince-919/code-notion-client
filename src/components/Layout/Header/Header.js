import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './../../../ColorModeSwitcher';
import { GiHamburgerMenu } from 'react-icons/gi';
import LinkButton from './LinkButton';
import { Link } from 'react-router-dom';
import { RiDashboardFill, RiLogoutBoxRLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/user';

const Header = ({ isAuthenticated = false, user }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const handleLogout = () => {
    onClose();
    dispatch(logout());
  };

  return (
    <>
      <ColorModeSwitcher />
      <Button
        onClick={onOpen}
        colorScheme="telegram"
        height="12"
        width="12"
        rounded="full"
        position="fixed"
        top="6"
        left="6"
        zIndex={'overlay'}
      >
        <GiHamburgerMenu />
      </Button>

      <Drawer placement="left" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">NTF Marketplace</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'} spacing={'4'}>
              <LinkButton onClose={onClose} />
              <LinkButton onClose={onClose} url="/courses" title="All NFTs" />
              <LinkButton
                onClose={onClose}
                url="/request"
                title="Request a NFTs"
              />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClose={onClose} url="/about" title="About" />

              <HStack
                justifyContent={'space-evenly'}
                position={'absolute'}
                bottom={'2rem'}
                width={'80%'}
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button variant={'ghost'} colorScheme="telegram">
                            Profile
                          </Button>
                        </Link>
                        <Button variant={'ghost'} onClick={handleLogout}>
                          <RiLogoutBoxRLine style={{ marginRight: '2px' }} />
                          Logout
                        </Button>
                      </HStack>

                      {user && user.role === 'admin' && (
                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button colorScheme="purple" variant="ghost">
                            <RiDashboardFill style={{ marginRight: '4px' }} />{' '}
                            Dashboard
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme="telegram">Sign In</Button>
                    </Link>
                    <p>OR</p>
                    <Link onClick={onClose} to="/sign-up">
                      <Button colorScheme="telegram">Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
