
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, Text, Spacer } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex p="4" bg="teal.500" align="center">
      <Box>
        <Text fontSize="2xl" fontWeight="bold" color="white">
          Store
        </Text>
      </Box>
      <Spacer />

      <Box>
        <Link to="/">
          <Text fontSize="lg" color="white" fontWeight="bold" mr="4">
            Homepage
          </Text>
        </Link>
      </Box>
      <Box>
        <Link to="/cart">
          <Text fontSize="lg" color="white" fontWeight="bold" mr="4">
            Cart
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;