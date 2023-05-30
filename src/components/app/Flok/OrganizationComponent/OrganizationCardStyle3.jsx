import { Box, Center, Flex } from "@chakra-ui/react";

const cardData = [
  {
    image: "post3.png",
    title: "Organization Staff",
    content:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: "post3.png",
    title: "Organization Staff",
    content:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: "post3.png",
    title: "Organization Staff",
    content:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    image: "post3.png",
    title: "Organization Staff",
    content:
      "Description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

function OrganizationCardStyle3() {
  return (
    <Box>
      {cardData.map((card, index) => (
        <Flex
          key={index}
          direction={{
            base: "column",
            md: index % 2 === 0 ? "row" : "row-reverse",
          }}
          align="center"
          my="60px"
        >
          <Box flex={1}>
            <img src={card.image} alt={`Image ${index}`} />
          </Box>
          <Box flex={1} p={4}>
            <Box
              fontSize={{
                base: "26px",
                sm: "28px",
                md: "28px",
                lg: "32px",
              }}
              lineHeight={{ base: "40px", md: "42px", lg: "46px" }}
              fontWeight="600"
              textAlign={{ base: "center", md: "left", lg: "left" }}
              py={{ base: "20px" }}
            >
              {card.title}
            </Box>
            <Box
              fontSize="20px"
              lineHeight={{ base: "40px", md: "42px", lg: "46px" }}
              textAlign={{ base: "center", md: "left", lg: "left" }}
            >
              {card.content}
            </Box>
          </Box>
        </Flex>
      ))}
    </Box>
  );
}

export default OrganizationCardStyle3;
