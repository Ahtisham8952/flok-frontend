import { Box,Flex,Text,Button,Image, Link } from '@chakra-ui/react'
import React from 'react'

const CreateNotification = () => {
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
              
      <Link fontWeight="600" textDecoration={'none'} _hover={{textDecoration:'none'}} >John Hammond </Link>   created  
      <Link fontWeight="600" textDecoration={'none'} _hover={{textDecoration:'none'}} > Isla Nublar SOC2 compliance report  </Link> 
          </Text>
          
          <Text
            
            color="#A5ACB8"
            fontSize="14px"
            fontWeight="500"
            lineHeight={"150%"}
          >
      Last Wednesday at 11:15 AM
          </Text>
            </Box>

        </Flex>

     </Box>
  )
}

export default CreateNotification