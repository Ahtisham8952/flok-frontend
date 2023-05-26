import { Box,Flex,Text,Button,Image, Link } from '@chakra-ui/react'
import React from 'react'

const CommentNotification = () => {
  return (
    <Box p="16px" boxShadow={"0px 1px 0px #E4E8EE"} position="relative">
        <Box position={"absolute"} top="8px" left="8px">
            <Box bg="#90CDF4" border="1px solid #4299E1" h="8px" w="8px" borderRadius={"50%"}>

            </Box>

        </Box>
        <Flex>
            <Box>
            <Image
            minH={"32px"}
            minW="32px"
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
             
      <Link fontWeight="600" textDecoration={'none'} _hover={{textDecoration:'none'}} >Dennis Nedry </Link> commented on     
      <Link fontWeight="600" textDecoration={'none'} _hover={{textDecoration:'none'}} >Isla Nublar SOC2 compliance report   </Link> 
          </Text>
        <Box pl="8px" borderLeft={'4px solid #DDDEE1'} borderRadius="2px" mb="8px">
        <Text
            
            color="#1A1F36"
            fontSize="14px"
            fontWeight="500"
            lineHeight={"150%"}
          >
      “Oh, I finished de-bugging the phones, but the system's compiling for eighteen minutes, or twenty.  So, some minor systems may go on and off for a while.”
          </Text>
        </Box>
          <Text
            
            color="#A5ACB8"
            fontSize="14px"
            fontWeight="500"
            lineHeight={"150%"}
          >
Yesterday at 5:42 PM
          </Text>
            </Box>

        </Flex>

     </Box>
  )
}

export default CommentNotification