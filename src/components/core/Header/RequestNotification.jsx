import { Box,Flex,Text,Button,Image, Link } from '@chakra-ui/react'
import React from 'react'

const RequestNotification = () => {
  return (
    <Box p="16px" boxShadow={"0px 1px 0px #E4E8EE"} position="relative">
        <Box position={"absolute"} top="8px" left="8px">
            <Box bg="#90CDF4" border="1px solid #4299E1" h="8px" w="8px" borderRadius={"50%"}>

            </Box>

        </Box>
        <Flex>
            <Box>
            <Image
                    src="https://cdn.enochdev.com/starget-bucket/header-menu/jawlinecurves.svg"
                    alt="icon"
                  />
            </Box>
            <Box ml="16px">
            <Text
            mb="16px"
            color="#1A1F36"
            fontSize="14px"
            
            lineHeight={"150%"}
          >
      <Link fontWeight="600" textDecoration={'none'} _hover={{textDecoration:'none'}} >Lex Murphy </Link>   requested access to  
      <Link fontWeight="600" textDecoration={'none'} _hover={{textDecoration:'none'}} >UNIX directory tree hierarchy  </Link> 
          </Text>
          <Flex mb="8px">
            <Button mr="8px" h="28px" bg="#E95744" colorScheme={"#E95744"} borderRadius="4px" p="4px 8px"
             fontSize="14px"
             fontWeight="500"
             lineHeight={"150%"}>
            Accept
            </Button>
            <Button color="#3C4257" border="1px solid #DDDEE1" h="28px" bg="#FFFFFF" colorScheme={"#FFFFFF"} borderRadius="4px" p="4px 8px"
             fontSize="14px"
             fontWeight="500"
             lineHeight={"150%"}>
           Reject
            </Button>
          </Flex>
          <Text
            
            color="#A5ACB8"
            fontSize="14px"
            fontWeight="500"
            lineHeight={"150%"}
          >
      Today at 9:42 AM
          </Text>
            </Box>

        </Flex>

     </Box>
  )
}

export default RequestNotification