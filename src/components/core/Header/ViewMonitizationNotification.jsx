import { Box,Flex,Text,Button,Image, Progress, useColorMode, Link } from '@chakra-ui/react'
import React from 'react'

const ViewMonitizationNotification = () => {
    
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
                    src="https://cdn.enochdev.com/starget-bucket/header-menu/monitizationiocnon.svg"
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
            <Link
      fontWeight="600" textDecoration={'none'} _hover={{textDecoration:'none'}}
      >Congratulations!</Link>  
             You have staked your tokens in the Orion Pool. Your first payout has been sent to your wallet.
     
          </Text>
          <Flex mb="18px">
         
            <Button color="#27272A" border="1px solid #27272A" h="32px" bg="#FFFFFF" colorScheme={"#FFFFFF"} borderRadius="4px" p="6px 8px"
             fontSize="14px"
             fontWeight="500"
             lineHeight={"150%"}>
          View monetization
            </Button>
          </Flex>
       
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

export default ViewMonitizationNotification