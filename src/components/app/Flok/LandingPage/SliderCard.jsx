import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const SliderCard = ({image,Name,TrxID}) => {
  return (
    <Box mx={{base:'25px',md:'20px'}} >

   
   <Box bg="#FFFFFF"  >
   <Box mb="20px">
   <Image w="100%" src={image}></Image>
   </Box>
  <Box p='20px'>
  <Text
            mb='20px'
            color="#1F1F1F"
            fontSize="24px"
            fontWeight="700"
            lineHeight={"34px"}
          >
      Event title
          </Text>
          <Flex alignItems={"center"} gap='5px' mb='6px'>
          <Text
          
            color="#878787"
            fontSize="18px"
            fontWeight="300"
            lineHeight={"25px"}
          >
     Date: 
          </Text>
          <Text
          
          color="#878787"
          fontSize="18px"
          fontWeight="300"
          lineHeight={"25px"}
        >
    Time
        </Text>
          
          </Flex>
          <Flex alignItems={"center"} gap='5px' mb='6px'>
          <Text
          
            color="#878787"
            fontSize="18px"
            fontWeight="300"
            lineHeight={"25px"}
          >
    Location: 
          </Text>
          <Text
          
          color="#878787"
          fontSize="18px"
          fontWeight="300"
          lineHeight={"25px"}
        >
    Lambda
        </Text>
          
          </Flex>
          <Flex alignItems={"center"} gap='5px' mb='15px'>
          <Text
          
            color="#878787"
            fontSize="18px"
            fontWeight="300"
            lineHeight={"25px"}
          >
    Price :
          </Text>
          <Text
          
          color="#878787"
          fontSize="18px"
          fontWeight="300"
          lineHeight={"25px"}
        >
    $$$
        </Text>
          
          </Flex>
          <Text
          
          color="#878787"
          fontSize="18px"
          fontWeight="300"
          lineHeight={"25px"}
        >
  Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid..
        </Text>
  </Box>
    

   </Box>
   </Box>
  )
}

export default SliderCard