import { Box, Heading, Text, Flex, Image } from "@chakra-ui/react";
import React from "react";
const Data = [
  {
    Image: "/post.png",
    Title: "Organization Staff",
    Description:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    Image: "/post.png",
    Title: "Organization Details",
    Description:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    Image: "/post.png",
    Title: "Organization Mission",
    Description:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    Image: "/post.png",
    Title: "Organization About",
    Description:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
const OrganizationCardStyle4 = () => {
  return (
    <Box>
      <Box>
        {Data.map((li, index) => (
          <Flex
            key={index}
            direction={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
            justify="space-around"
            align="center"
            mb={{ base: "40px", lg: "80px" }}
          >
            <Box>
              <Image
                width={{ base: "400px", md: "500px", lg: "500px" }}
                src={li.Image}
                alt="Caffe Latte"
              />
            </Box>
            <Box width={{ base: "80%", sm: "80%", md: "50%", lg: "50%" }}>
              <Box>
                <Box>
                  <Box
                    fontSize={{
                      base: "26px",
                      sm: "28px",
                      md: "28px",
                      lg: "32px",
                    }}
                    lineHeight={{ base: "30px", md: "32px", lg: "36px" }}
                    fontWeight="600"
                    textAlign={{ base: "center", md: "left", lg: "left" }}
                    py={{ base: "20px" }}
                  >
                    {li.Title}
                  </Box>
                  <Text
                    lineHeight={{ base: "30px", md: "35px", lg: "40px" }}
                    textAlign={{ base: "center", md: "left", lg: "left" }}
                    font-size="20px"
                  >
                    {li.Description}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default OrganizationCardStyle4;
