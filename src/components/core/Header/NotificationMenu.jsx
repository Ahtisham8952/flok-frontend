import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Image,
    Box,
    Flex,
    Text,
    Button,
  } from '@chakra-ui/react'
import RequestNotification from './RequestNotification'
import CompleteProfileNotification from './CompleteProfileNotification'
import GiftNotification from './GiftNotification'
import ViewMonitizationNotification from './ViewMonitizationNotification'
import CommentNotification from './CommentNotification'
import CreateNotification from './CreateNotification'

const NotificationMenu = () => {
  return (
    <Menu >
    <MenuButton display={"flex"}
                justifyContent="center"
                
                    mr={{ md: "26px", sm: "10px", base: "6px" }}
                    px={"0px"}
                    _hover={{ bg: "transparent", opacity: "0.8" }}
                    _focus={{ bg: "transparent" }}
                    minW="auto" >
    <Image
                    src="https://cdn.enochdev.com/starget-bucket/header-menu/notification.svg"
                    alt="icon"
                  />
                  
    </MenuButton>
    <MenuList bg="#FFFFFF" w={{base:'320px',md:'440px'}} p="0px" 
     >
     <Box p="12px 16px">
        <Flex justifyContent={"space-between"} >
            <Flex alignItems={"center"}>
            <Text
            mr="8px"
            color="#1A1F36"
            fontSize="14px"
            fontWeight="500"
            lineHeight={"150%"}
          >
       Notifications
          </Text>
          <Text
            
            color="#9EA0AA"
            fontSize="12px"
            fontWeight="500"
            lineHeight={"150%"}
          >
       All
          </Text>

            </Flex>
            <Flex alignItems={"center"}>
            <Text
            
            color="#1A1F36"
            fontSize="14px"
            fontWeight="400"
            lineHeight={"150%"}
          >
       Mark all as read
          </Text>
          <Image
          ml="4px"
                    src="https://cdn.enochdev.com/starget-bucket/header-menu/oulineblacktick.svg"
                    alt="icon"
                  />
            </Flex>

        </Flex>

     </Box>
     <Box
     h="555px" overflowY={"scroll"}
     css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'scrollbarColor',
          borderRadius: '24px',
        },
      }} >

     
     <RequestNotification/>
     <CompleteProfileNotification/>
     <GiftNotification/>
     <ViewMonitizationNotification/>
     <CommentNotification/>
     <CreateNotification/>
     </Box>
    </MenuList>
  </Menu>
  )
}

export default NotificationMenu