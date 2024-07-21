import React from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Button,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg="blue.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems="center">
          <Box color="white" fontWeight="bold">
            Location Based Filtering
          </Box>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <NavLink to={"/"}>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none", bg: "blue.400" }}
                href="#"
              >
                Home
              </Link>
            </NavLink>
            <NavLink to={"nearby-users"}>
              <Link
                px={2}
                py={1}
                rounded="md"
                _hover={{ textDecoration: "none", bg: "blue.400" }}
                href="#"
              >
                Nearby Users
              </Link>
            </NavLink>
          </HStack>
        </HStack>
       
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            <Link
              px={2}
              py={1}
              rounded="md"
              _hover={{ textDecoration: "none", bg: "blue.400" }}
              href="#"
            >
              Home
            </Link>
            <Link
              px={2}
              py={1}
              rounded="md"
              _hover={{ textDecoration: "none", bg: "blue.400" }}
              href="#"
            >
              About
            </Link>
            <Link
              px={2}
              py={1}
              rounded="md"
              _hover={{ textDecoration: "none", bg: "blue.400" }}
              href="#"
            >
              Services
            </Link>
            <Link
              px={2}
              py={1}
              rounded="md"
              _hover={{ textDecoration: "none", bg: "blue.400" }}
              href="#"
            >
              Contact
            </Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
