import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import LabelBox from './LabelBox';
import HomePageTabs from './HomePageTabs';
import InstructionSteps from './InstructionSteps';

const LandingPage = () => {
  
  return (
    <>
   
    <Box pt={{base:'30px',md:'40px',lg:'60px',xl:'100px'}} maxW={"1750px"} w='100%' mx='auto' px='20px'>
      <Box mb='40px'>
      <LabelBox/>
      </Box>
      

    </Box>
    <Box pt={{base:'20px',md:'40px',lg:'60px',xl:'100px'}} maxW={"1750px"} w='100%' mx='auto' px='20px'>
    <HomePageTabs/>
    </Box>
   
    <Box>
        <InstructionSteps/>
      </Box>
       
       

    </>
  );
};

export default LandingPage;



