import { Box, Image, Heading, Center } from "@chakra-ui/react";
import React from "react";
import OrganizationCardStyle4 from "./OrganizationCardStyle4";
import LayoutWrapper from "../../../core/LayoutWrapper/LayoutWrapper";

const OrganizationPageStyle4 = () => {
  return (
    <LayoutWrapper>

   
    <Box maxW="1760px" width="100%" px="20px" mx="auto" py="50px">
      <Box>
        <Image src="/fullyround.png" alt="banner"></Image>
      </Box>
      <Box>
        <Box
          mt="64px"
          textAlign="center"
          fontSize={{ base: "34px", md: "44px", lg: "64px" }}
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
        <OrganizationCardStyle4 />
      </Box>
    </Box>
    </LayoutWrapper>
  );
};

export default OrganizationPageStyle4;
