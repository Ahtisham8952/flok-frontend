import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Link,
  Image,
  Button,
  Container,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Input,
} from "@chakra-ui/react";

import React from "react";
import MenuComponent from "./Menu";
import SearchBox from "./Search";
import MenuItemList from "./MenuList";
import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";
import AfterLoginMenu from "./AfterLoginMenu";
import NotificationMenu from "../Header/NotificationMenu"
import LanguageDropdown from "./LanguageDropdown";

const Header = () => {
  return (
    <>
      <Box py="12px" bg="#1F1F1F" >
        <Container maxW={"1675px"} px="20px">
          <Flex justifyContent="space-between" alignItems="center" gap="20px">
            <Flex>
             
              <Link
                href="/"
                maxW={{ sm: "128px", base: "100px" }}
                ml={{ sm: "16px", base: "15px" }}
                textDecoration="none !important"
                position="relative"
                mt={{ base: "6px", md: "2px" }}
              >
                <Image
                  src="/logoflok.svg"
                  alt="logo"
                />
                
              </Link>
              
            </Flex>
            <Box bg='#FFFFFF' pr='12px' w={"290px"}  borderRadius={"10px"}  justifyContent={"space-between"} display={{ lg: "flex", base: "none" }}>
            <Input w='63%' placeholder='Search' bg="none" border={"none"} _focusVisible={{border:'none'}} />
            <Flex gap='10px ' alignItems={"center"} >
              
              <Image src='/saerchbaricon.svg'></Image>
              <Box bg="rgba(166, 166, 166, 0.28)" w='1px' h='22px' >

              </Box>
           
             <Image src='/filtericons.svg'></Image>
             
              
            </Flex>
            </Box>
           

            
            <Flex alignItems={"center"} display={{ lg: "flex", base: "none" }}>

           
            <Flex  w="100%" justifyContent={"space-between" } mr="43px" gap='65px'>
              <Box   pb="4px"
              minWidth={"3px"}
            >
              <Link href="#" 
               color="white"
               _hover={{textDecoration:'none'}}
               fontSize="16px"
               fontWeight="600"
               lineHeight={"24px"}> 
                About
              </Link>

              </Box>
             <Box  pb="4px"
              color="#9A99AD"
             
              fontSize="16px"
              fontWeight="400"
              lineHeight={"24px"}
           >

             
              <Link href="#" 
              _hover={{textDecoration:'none'}}
             > 
            Help
              </Link>
              </Box>
              <Box  pb="4px"
              color="#9A99AD"
             
              fontSize="16px"
              fontWeight="400"
              lineHeight={"24px"}
           >

             
              <Link href="#" 
              _hover={{textDecoration:'none'}}
             > 
            Login
              </Link>
              </Box>
             
            </Flex>
         
            </Flex>
            <Box display={{ lg: "flex", base: "none" }}>
            <LanguageDropdown/>

            </Box>
           
            <Box display={{ lg: "none", base: "block" }}>
                <MobileMenu />
              </Box>
             
          
          
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Header;
