import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Image } from '@chakra-ui/react'
import ChartTabContent from './ChartTabContent';
import LocationTabContent from './LocationTabContent';
const HomePageTabs = () => {
  // Component logic here
  return (
    <Box>
<Tabs>
  <TabList w='100%' justifyContent={"center"} borderBottom={"none"} mb='30px'>
    <Tab _selected={{borderBottom:'none'}}>
        <Image src="/charticon.svg"></Image>
    </Tab>
    <Tab _selected={{borderBottom:'none'}}>
    <Image src="/locationicon.svg"></Image>
    </Tab>
    
  </TabList>

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