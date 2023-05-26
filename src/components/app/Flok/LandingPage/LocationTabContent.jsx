import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import FlokSlider from "./FlokSlider"
const LocationTabContent = () => {
  
  return (
   <Box>
    <Box mb="50px">
        <Image alt="img"src="/mapimages.png"></Image>
    </Box>
    <Box mb='50px'>

   
   
    <FlokSlider/>
    </Box>
    
    <Box display={"flex"} justifyContent={"center"} mb='100px' >
    <Button bg="#D5D5D5" colorScheme={"#D5D5D5"} 
     color="#878787"
     fontSize="16px"
     fontWeight="500"
     lineHeight={"150%"}
     p="8px 56px"
     borderRadius={"50px"}
     
     >
       Show more
     </Button>

    </Box>

   </Box>
  );
};

export default LocationTabContent;