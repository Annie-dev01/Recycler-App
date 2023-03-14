import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../svg/Logo";
import {  } from "react-icons/bs"
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai"
import { FiPhone } from "react-icons/fi"

const Footer = () => {
  return (
    <Flex 
      bg="linear-gradient(180deg, rgba(15, 169, 88, 0.51) 0%, #0FA958 99.99%, #0FA958 100%)" 
      justify="space-between" 
      p="50px" 
      flexWrap="wrap"
      alignItems='center'
    >
      <Box w="40%" p={5}>
        <Flex mb={5} alignItems="center">
          <Logo />
          <Text fontWeight={500} fontSize="32px">
            {" "}
            Recycler
          </Text>
        </Flex>
        <Text fontWeight={500} fontSize="20px">
          Recycler is an innovative and unique platform that has revolutionized
          the way recycling companies and individuals handle plastic waste
          materials.
        </Text>
      </Box>

      <Box fontSize="20px" fontWeight={500} color="accent" w="20%">
        <Text fontSize="24px" fontWeight={700} color="light" mb={2}>
          SUPPORT
        </Text>
        <Text mb={2}>Contact Us</Text>
        <Text mb={2}>Privacy Policy</Text>
        <Text mb={2}>Cookies</Text>
        <Text mb={2}>Customers</Text>
        <Text mb={2}>FAQ</Text>
      </Box>

      <Box fontSize="20px" fontWeight={500} color="accent" w="20%">
        <Text fontSize="24px" fontWeight={700} color="light" mb={2}>
          CONNECT WITH US
        </Text>
        <Text display="flex" alignItems="center" mb={2}><FiPhone/>&nbsp;+234 888 909 6654s</Text>
        <Text display="flex" alignItems="center" mb={2}><AiOutlineInstagram/>&nbsp;recycler</Text>
        <Text display="flex" alignItems="center" mb={2}><AiOutlineTwitter/>&nbsp;recycler_ng</Text>
        <Text display="flex" alignItems="center" mb={2}><AiOutlineFacebook/>&nbsp;Recycler Nigeria</Text>
        <Text display="flex" alignItems="center" mb={2}><AiOutlineLinkedin/>&nbsp;Recycler Nigeria</Text>
      </Box>
      <Box w="100%" mt={10} textAlign="center">
        <Text fontSize="16px" fontWeight={500} color="accent" opacity={0.5}>Copyright @ 2023 All rights reserved</Text>
      </Box>
    </Flex>

  );
};

export default Footer;
