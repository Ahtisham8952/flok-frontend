import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
const LabelData=[
    {
        Image:'/persons-1.svg',
        Name:'Dance'

    },
    {
        Image:'/persons-2.svg',
        Name:'Music'

    },
    {
        Image:'/persons-3.svg',
        Name:'Language'

    },
    {
        Image:'/persons-4.svg',
        Name:'Adventure'

    },
    {
        Image:'/persons-5.svg',
        Name:'Reading'

    },
    {
        Image:'/persons-6.svg',
        Name:'Chess'

    },
    {
        Image:'/persons-7.svg',
        Name:'All'

    },
    {
        Image:'/persons-8.svg',
        Name:'Today'

    },
    {
        Image:'/persons-9.svg',
        Name:'This Weekend'

    },
    {
        Image:'/persons-10.svg',
        Name:'Free'

    },
]
const LabelBox = () => {
  return (
    <Box maxW={"1530px"} w='100%' mx="auto">
         <Grid  templateColumns={{ base: "repeat(2, 1fr)",sm:"repeat(3, 1fr)", md: "repeat(4, 1fr)",lg:'repeat(5, 1fr)' }}  w="100%" gap={{base:'16px',md:'24px'}}>
        {LabelData.map((li,index) => (
 <Box key={index} bg="#FFFFFF" borderRadius={"5px"} maxW="270px" w="100%" py="11px" px="15px" display={"flex"} alignItems="center" gap={{base:'24px',md:'34px',lg:'45px',xl:'64px'}}>

 <Image alt="img"src={li.Image}></Image>
 <Text
             
             color="#B8B8B8"
             fontSize={{base:'10px',md:'12px',lg:'14px',xl:'16px'}}
             fontWeight="600"
             lineHeight={"25px"}
           >
       {li.Name}
           </Text>
    </Box>
))}
</Grid>
  
   </Box>
  )
}

export default LabelBox