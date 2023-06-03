import { Box, Image, Heading, Center, Card, Flex, Text } from "@chakra-ui/react";
import React from "react";
import OrganizationCardStyle2 from "./OrganizationCardStyle2";
import LayoutWrapper from "../../../core/LayoutWrapper/LayoutWrapper";
import FlokSlider from "../LandingPage/FlokSlider"
const OrganizationPageStyle2 = () => {
  return (
    <LayoutWrapper>

<Box>
        <Image w="100%" src="/banner.png" alt="banner"></Image>
      </Box>
    <Box maxW="1760px" width="100%"  mx='auto'>
      
      <Box>
        <Box
          mt="64px"
          textAlign="center"
          fontSize={{ base: "28px", md: "44px", lg: "64px" }}
          lineHeight={{ base: "44px", md: "54px", lg: "74px" }}
          fontWeight="700"
        >
          Little Fish Swimming LTD
        </Box>
      </Box>
      <Box>
        <Box
          mt="20px"
          color="black"
          textAlign="center"
          fontSize={{ base: "18px", md: "20px", lg: "20px" }}
        >
          We teach your little ones to love the water and give them confidence.
        </Box>
      </Box>
      <Box my="60px">
        <OrganizationCardStyle2 />
      </Box>
      <Box my='50px' pt='40px' borderTop={"1px solid #DAD9D9"}>

   
<Flex justifyContent={"center"} alignItems={"center"} mb='50px' >
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
    </Box>
    </LayoutWrapper>
  );
};

export default OrganizationPageStyle2;
