import { TriangleDownIcon } from "@chakra-ui/icons";
import {
  Box,
  
  Image,
  
  Flex,
 
  Input,
  VStack,
  Button,
  Grid,
} from "@chakra-ui/react";

import React, { useState } from "react";
const data=[
    {
        searchName:'Near me'

    },
    {
        searchName:'Music'

    },
    {
        searchName:'Language'

    },
    {
        searchName:'Chess'

    },
    {
        searchName:'Reading'

    },
    {
        searchName:'Adventure'

    },
    {
        searchName:'All'

    },
    {
        searchName:'Today'

    },
    {
        searchName:'This weekend'

        
    },
    {
        searchName:'Free'

    },
    {
        searchName:'Wednesday'

    },
    {
        searchName:'Geneva'

    },
    {
        searchName:'Music'

    },
    {
        searchName:'Language'

    },
    {
        searchName:'Chess'

    },
    {
        searchName:'Reading'

    },

    {
        searchName:'Adventure'

    },
    {
        searchName:'All'

    },
    {
        searchName:'Today'

    },
    {
        searchName:'This weekend'

    },
]
const SearchBarFilter = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleOptionSelect = () => {
       
        setIsOpen(false);
      };
  return (
<Box >
<Box bg='#FFFFFF' pr='12px' w={"290px"}  borderRadius={"10px"}  justifyContent={"space-between"} display={"flex"} >
            <Input onClick={() => setIsOpen(!isOpen)} w='63%' placeholder='Search' bg="none" border={"none"} _focusVisible={{border:'none'}} />
            <Flex gap='10px ' alignItems={"center"} >
              
              <Image alt="img"src='/saerchbaricon.svg'></Image>
              <Box bg="rgba(166, 166, 166, 0.28)" w='1px' h='22px' >

              </Box>
           
             <Image alt="img"src='/filtericons.svg'></Image>
             
              
            </Flex>
            </Box>
            {isOpen && (
        <Box
         position={"absolute" }
         top='64px'
         left={"0px"}
        w="100%"
       
         bg='#FFFFFF'
         p="40px"
        >
           <Grid  templateColumns={{ base: "repeat(2, 1fr)",sm:"repeat(4, 1fr)", md: "repeat(5, 1fr)",lg:'repeat(10, 1fr)' }}  w="100%" gap="32px">
           {data.map((li,index) => (
            
            <Button key={index} bg="#F2F2F2" colorScheme={"#F2F2F2"} 
     color="#B8B8B8"
     fontSize="10px"
     fontWeight="400"
     lineHeight={"150%"}
     _hover={{bg:"#1F1F1F",color:"white"}}
     borderRadius={"50px"}
     maxW={"142px"}
     w='100%'
     display={"flex"}
     justifyContent={"center"}
     >
       {li.searchName}
     </Button>
           ))}
            </Grid>
           
          
        </Box>
      )}
</Box>

    )
}

export default SearchBarFilter;