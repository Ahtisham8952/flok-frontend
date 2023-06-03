import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
const LabelData=[
    {
        Image:'/kidsname-1.svg',
        Name:'Sports'

    },
    {
        Image:'/persons-2.svg',
        Name:'Music'

    },
    {
        Image:'/kidsname-2.svg',
        Name:'Art'

    },
    {
        Image:'/persons-4.svg',
        Name:'Educational'

    },
    {
        Image:'/birthdayicon-1.svg',
        Name:'Birthdays'

    },
    {
        Image:'/campsicon-1.svg',
        Name:'Camps'

    },
    {
        Image:'/wedicons-1.svg',
        Name:'Wednesday'

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
    <Box maxW={"1530px"} w='100%' mx="auto" px={{base:'20px',md:'20px',lg:'100px',xl:'100px',xxl:'100px'}} cursor={"pointer"}>
         <Grid  templateColumns={{ base: "repeat(2, 1fr)",sm:"repeat(3, 1fr)", md: "repeat(4, 1fr)",lg:'repeat(5, 1fr)' }}  w="100%" gap={{base:'16px',md:'24px',xl:'12px',xxl:'24px'}} mx="auto">
        {LabelData.map((li,index) => (
 <Box key={index} bg="#FFFFFF" borderRadius={"5px"} maxW="270px" w="100%" py="11px" px={{base:'11px',md:'12px',xl:'7px',xxl:'15px'}} display={"flex"} alignItems="center" gap={{base:'12px',md:'14px',lg:'20px',xl:'24px',xxl:'32px',xxxl:'64px'}}>

 <Image h={{base:'20px',md:'20px',lg:'30px'}} w={{base:'20px',md:'20px',lg:'30px'}} alt="img"src={li.Image}></Image>
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