import { Box, Image,Text,Flex } from '@chakra-ui/react'
import React from 'react'

const ImageGallery = () => {
    return (
        <>
           <Box>
            <Flex gap={{base:'10px',md:'24px'}}>
             <Flex gap={{base:'7px',md:'24px'}} flexDirection={"column"} >
             <Image src="/gallery-1.png" w="100%"/>
             <Image src="/gallerpic-2.png" w="100%"/>
             <Image src="/tendermerg.png" w="100%"/>
             </Flex>
             <Flex gap={{base:'10px',md:'24px'}} flexDirection={"column"}>
             
             <Image src="/gallerpic-3.png" w="100%"/>
             <Flex gap={{base:'10px',md:'24px'}}>
                <Box>
                <Image src="/galleryfoot-1.png" w="100%"/>
                </Box>
             
                <Box position={"relative"} >
                <Image src="/galleryfoot-2.png" w="100%"/>
                <Box position={"absolute"} top='50%' left='30%'>
                <Text
            
            color="#FFFFFF"
            fontSize={{base:'12px',md:'16px',lg:'20px',xl:'30px'}}
            fontWeight="600"
            lineHeight={"50px"}
          >
      + 10 Photos 
          </Text>
                </Box>
                </Box>
             </Flex>
             </Flex>
               
            </Flex>
            

           </Box>

        </>
    )
}

export default ImageGallery