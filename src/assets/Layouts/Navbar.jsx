import { Box, Container, Flex, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import HamburgerIcon from "../../icons/hamburger-icon.svg"
import ProfileIcon from "../../icons/profile-icon.svg"

const Navbar = () => {
  return (
    <Container px={{base:"32px", sm:"48px"}} py={{base:"32px", sm:"32px"}} border={"1px solid black"}>
        <Flex justifyContent={"space-between"} alignItems={"center"}>
            <Box>Name</Box>
            <Flex gap={8} display={{base:"none", sm:"flex"}} alignItems={"center"} height={"32px"}>
                <Link>Home</Link>
                <Link>Etc</Link>
                <Link>Etc</Link>
                <Box margin={"0 auto"} height={"24px"}>

                  <Image src={ProfileIcon} alt="hamburger-nav-icon"/>
                </Box>
            </Flex>
            <Box gap={16} display={{base:"block", sm:"none"}}>
              <Image src={HamburgerIcon} alt="hamburger-nav-icon"/>
            </Box>
        </Flex>
    </Container>
  )
}

export default Navbar
