import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Image, Flex, Tooltip } from '@chakra-ui/react'
import ChartTabContent from './ChartTabContent';
import LocationTabContent from './LocationTabContent';


import CalendarDropdown from './CalendarDropdown';

const HomePageTabs = () => {
  
  return (
    <Box>
<Tabs>
  <Flex w='100%' alignItems={"center"} justifyContent={"center"} mb='30px'>
  <TabList  justifyContent={"center"} borderBottom={"none"} >
  <Tooltip label="Discover events based on the Popular Categories.  " aria-label="Popover" placement="top" hasArrow>
      <Box as="span" display="inline-block" position="relative">
      <Tab _selected={{borderBottom:'none'}}>
        <Image  src="/tabicon-1.svg" alt='imgicon'/>
    </Tab>
      </Box>
    </Tooltip>
    <Tooltip label="Discover events based on the location you enter.  " aria-label="Popover" placement="top" hasArrow>
      <Box as="span" display="inline-block" position="relative">
      <Tab _selected={{borderBottom:'none'}}>
    <Image    src="/tabicon-2.svg" alt='imgicon'/>
    </Tab>
      </Box>
    </Tooltip>
    
    
  </TabList>
  <Tooltip label="Discover events by selecting dates on the calendar.  " aria-label="Popover" placement="top" hasArrow>
      <Box as="span" display="inline-block" position="relative">
      <CalendarDropdown/>
      </Box>
    </Tooltip>
 
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