import React from 'react'
import Image from 'next/image';
import henleyLogo from '../../public/images/logo-image.png';
import { BsCloudSun, BsFillMoonStarsFill, BsFillSunFill, BsThreeDotsVertical } from 'react-icons/bs';
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  Text,
  Link,
  Divider,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Heading,
  Center
} from '@chakra-ui/react'
// import Homebutton from './homebutton';
import { MenuButton } from './menuButton';
import { BannerMenuLayout } from './menus';


export const Banner = () => {



  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Center>
      <div className='navbarcontent'>
        <Box className='navbarlayout' mt={1} mb={1} >
          <Container>
        <div className='logo-container'>
          <Image
            src={henleyLogo}
            alt="Henley Logo"
            width='592'
            height='498'
          />
        </div>
            
          </Container>
        </Box>
        <Center>
          <BannerMenuLayout />
        </Center>
        <Divider />
      </div>
    </Center>
  )
}