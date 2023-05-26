import React from 'react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Text,
    Flex,
    Image,
  } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
const LanguageDropdown = () => {
 
  return (
    <Menu>
    <MenuButton  >
        <Flex gap='6px'>
        <Text
           
            color="#FFFFFF"
            fontSize="14px"
            fontWeight="500"
            lineHeight="34px"
          >
      Language
          </Text>
          <Image src="/flagships.svg"></Image>
          <Image src="/tipdown.svg"></Image>
        </Flex>
     
    </MenuButton>
    <MenuList>
      <MenuItem>Download</MenuItem>
      <MenuItem>Create a Copy</MenuItem>
      <MenuItem>Mark as Draft</MenuItem>
      <MenuItem>Delete</MenuItem>
      <MenuItem>Attend a Workshop</MenuItem>
    </MenuList>
  </Menu>
  );
};

export default LanguageDropdown;