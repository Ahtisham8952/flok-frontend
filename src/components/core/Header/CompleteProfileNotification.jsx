import { Box,Flex,Text,Button,Image, Progress, useColorMode, Link } from '@chakra-ui/react'
import React from 'react'

const CompleteProfileNotification = () => {
    const { colorMode } = useColorMode();
    const gradientStart = { light: "#00c1ff", dark: "#00c1ff" };
    const gradientEnd = { light: "#ffffff", dark: "#3700b3" };
  return (
    <Box p="16px" boxShadow={"0px 1px 0px #E4E8EE"} position="relative">
        <Box position={"absolute"} top="8px" left="8px">
            <Box bg="#90CDF4" border="1px solid #4299E1" h="8px" w="8px" borderRadius={"50%"}>

            </Box>

        </Box>
        <Flex>
            <Box>
            <Image
            minW={"26px"}
            minH="24px"
                    src="https://cdn.enochdev.com/starget-bucket/header-menu/hearctouting.svg"
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
      60% profile completed. Setup 100% of your profile to earn <Link
      fontWeight="600" textDecoration={'none'} _hover={{textDecoration:'none'}}
      >5 XP</Link>  and level up your rank now!
          </Text>
          <Flex mb="18px">
         
            <Button color="#27272A" border="1px solid #27272A" h="32px" bg="#FFFFFF" colorScheme={"#FFFFFF"} borderRadius="4px" p="6px 8px"
             fontSize="14px"
             fontWeight="500"
             lineHeight={"150%"}>
           Complete Profile
            </Button>
          </Flex>
          <Progress
          mb="18px"
          borderRadius={"41px"}
      value={50}
      color={`linear-gradient(to right, ${gradientStart[colorMode]}, ${gradientEnd[colorMode]})`}
    />
          <Text
            
            color="#A5ACB8"
            fontSize="14px"
            fontWeight="500"
            lineHeight={"150%"}
          >
      Today at 9:42 AM
          </Text>
            </Box>

        </Flex>

     </Box>
  )
}

export default CompleteProfileNotification