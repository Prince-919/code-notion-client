import { VStack } from '@chakra-ui/react';
import {
  RiAddCircleFill,
  RiDashboardFill,
  RiEyeFill,
  RiUser3Fill,
} from 'react-icons/ri';
import LinkButton from './LinkButton';
import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  return (
    <VStack
      spacing={'8'}
      p={'16'}
      boxShadow={'-2px 0 10px rgba(45, 85, 255, 0.5)'}
    >
      <LinkButton
        url={'dashboard'}
        Icon={RiDashboardFill}
        text={'Dashboard'}
        active={location.pathname === '/admin/dashboard'}
      />
      <LinkButton
        url={'create-course'}
        Icon={RiAddCircleFill}
        text={'Create NFT'}
        active={location.pathname === '/admin/create-course'}
      />
      <LinkButton
        url={'courses'}
        Icon={RiEyeFill}
        text={'All NFTs'}
        active={location.pathname === '/admin/courses'}
      />
      <LinkButton
        url={'users'}
        Icon={RiUser3Fill}
        text={'Users'}
        active={location.pathname === '/admin/users'}
      />
    </VStack>
  );
};

export default Sidebar;
