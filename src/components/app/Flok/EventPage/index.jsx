import { Box, Image,Text,Flex, Button } from '@chakra-ui/react'
import React from 'react'
import ImageGallery from './ImageGallery'
import FlokSlider from "../LandingPage/FlokSlider"
import OrganizationalCards from './OrganizationalCards'
const EventMain = () => {
    return (
        <>
            <Box maxW={"1760px"} w='100%' px='20px' mx="auto" mb='100px'>
                <Box mb='100px'>
                <Image alt="banner" src='/eventBanner.png'/> 
                </Box>
                <Flex justifyContent={"center"} alignItems={"center"} mb="40px">
                    <Box>
                    <Text
                    textAlign={"center"}
            mb='12px'
            color="#1F1F1F"
            fontSize={{base:'34px',md:'45px',lg:'64px'}}
            fontWeight="700"
            lineHeight={{base:'44px',md:'55px',lg:'74px'}}
          >
       Little Fish Swimming LTD
          </Text>
          <Text
            textAlign={"center"}
            color="#1F1F1F"
            fontSize="20px"
            fontWeight="300"
            lineHeight={"25px"}
          >
       We teach your little ones to love the water and give them confidence. 
          </Text>
                    </Box>

                </Flex>

                <ImageGallery/>
                <Box mt='40px'>
                    <Flex justifyContent={"space-between"} flexDirection={{base:'column',md:'row'}} gap="10px" pb='30px' borderBottom={"1px solid #DAD9D9"}>
                        <Box>
                        <Text
            mb='16px'
            color="#1F1F1F"
            fontSize="24px"
            fontWeight="700"
            lineHeight={"25px"}
          >
      Event title
          </Text>
          <Text
            mb='16px'
            color="#1F1F1F"
            fontSize="24px"
            fontWeight="700"
            lineHeight={"25px"}
          >
     Date: Time
          </Text>
          <Text
            mb='16px'
            color="#1F1F1F"
            fontSize="24px"
            fontWeight="700"
            lineHeight={"25px"}
          >
    Location: Lambda
          </Text>
          <Text
            mb='16px'
            color="#1F1F1F"
            fontSize="24px"
            fontWeight="700"
            lineHeight={"25px"}
          >
    Price $$$
          </Text>
          <Text
            mb='16px'
            color="#1F1F1F"
            fontSize="24px"
            fontWeight="700"
            lineHeight={"25px"}
          >
    Capacity 23/30
          </Text>
          <Text
            mb='30px'
            color="#1F1F1F"
            fontSize="24px"
            fontWeight="700"
            lineHeight={"25px"}
          >
   Restrictrions: Ages 7-12
          </Text>
          <Text
            mb='16px'
            color="#1F1F1F"
            fontSize="24px"
            fontWeight="700"
            lineHeight={"25px"}
          >
  Read More
          </Text>
                        </Box>
                        <Box>
                    <Button bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize="14px"
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 56px"
     borderRadius={"50px"}
     mr="10px"
     >
       Reserve
     </Button>
     <Text
     textAlign={{base:'left',md:'center'}}
            
            color="#FF564A"
            fontSize="17px"
            fontWeight="300"
            lineHeight={"150%"}
          >
       Only 2 tickets left
          </Text>
                    </Box>
                    <Box>
                    <Button bg="#1F1F1F" colorScheme={"#1F1F1F"} 
     color="#FFFFFF"
     fontSize="14px"
     fontWeight="400"
     lineHeight={"150%"}
     p="8px 56px"
     borderRadius={"50px"}
     mr="10px"
     >
      Join Waiting list
     </Button>
     <Text
     textAlign={{base:'left',md:'center'}}
            
            color="#1F1F1F"
            fontSize="17px"
            fontWeight="300"
            lineHeight={"150%"}
          >
      25 on waiting list
          </Text>
                    </Box>

                    </Flex>
                    
                </Box>
                <Box my='50px'>

   
<Flex justifyContent={"center"} alignItems={"center"} mb='50px'>
<Text
    lineHeight={"42px"}
    fontSize={{base:'20px',md:'24px',lg:'32px'}}
    fontWeight={"600"}

    color="#1F1F1F"
    >
    Events from Little Fish

    </Text>

   
</Flex>
<FlokSlider/>
</Box>
<OrganizationalCards/>


            </Box>

        </>
    )
}

export default EventMain