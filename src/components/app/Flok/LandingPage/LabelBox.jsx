import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
const LabelData=[
    {
        Image:'https://cdn.enochdev.com/pluto-fund/persons-1.svg',
        Name:'Dance'

    },
    {
        Image:'https://cdn.enochdev.com/pluto-fund/persons-1.svg',
        Name:'Dance'

    },
    {
        Image:'https://cdn.enochdev.com/pluto-fund/persons-1.svg',
        Name:'Dance'

    },
    {
        Image:'https://cdn.enochdev.com/pluto-fund/persons-1.svg',
        Name:'Dance'

    },
    {
        Image:'https://cdn.enochdev.com/pluto-fund/persons-1.svg',
        Name:'Dance'

    },
    {
        Image:'https://cdn.enochdev.com/pluto-fund/persons-1.svg',
        Name:'Dance'

    },
    {
        Image:'https://cdn.enochdev.com/pluto-fund/persons-1.svg',
        Name:'Dance'

    },
    {
        Image:'https://cdn.enochdev.com/pluto-fund/persons-1.svg',
        Name:'Dance'

    },
    {
        Image:'https://cdn.enochdev.com/pluto-fund/persons-1.svg',
        Name:'Dance'

    },
    {
        Image:'https://cdn.enochdev.com/pluto-fund/persons-1.svg',
        Name:'Dance'

    },
]
const LabelBox = () => {
  return (
    <Box maxW={"1530px"} w='100%' mx="auto">
         <Grid  templateColumns={{ base: "repeat(2, 1fr)",sm:"repeat(3, 1fr)", md: "repeat(4, 1fr)",lg:'repeat(5, 1fr)' }}  w="100%" gap="24px">
        {LabelData.map((li) => (
 <Box bg="#FFFFFF" borderRadius={"5px"} maxW="270px" w="100%" py="11px" px="15px" display={"flex"} alignItems="center" gap={{base:'24px',md:'34px',lg:'45px',xl:'64px'}}>

 <Image src={li.Image}></Image>
 <Text
             
             color="#B8B8B8"
             fontSize="16px"
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