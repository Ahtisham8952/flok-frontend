import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Image, Flex } from '@chakra-ui/react'
import ChartTabContent from './ChartTabContent';
import LocationTabContent from './LocationTabContent';


import CalendarDropdown from './CalendarDropdown';

const HomePageTabs = () => {
  
  return (
    <Box>
<Tabs>
  <Flex w='100%' alignItems={"center"} justifyContent={"center"}>
  <TabList  justifyContent={"center"} borderBottom={"none"} >
    <Tab _selected={{borderBottom:'none'}}>
        <Image  src="/tabicon-1.svg" alt='imgicon'/>
    </Tab>
    <Tab _selected={{borderBottom:'none'}}>
    <Image    src="/tabicon-2.svg" alt='imgicon'/>
    </Tab>
    
  </TabList>
 <CalendarDropdown/>
  </Flex>
  

  <TabPanels p='0px'>
    <TabPanel p='0px'>
    <ChartTabContent/>
    </TabPanel>
    <TabPanel p="0px">
     <LocationTabContent/>
    </TabPanel>
   
  </TabPanels>
</Tabs>
    </Box>
  );
};

export default HomePageTabs;