import React, { useState } from 'react'
import { OrganizationloginStepOne } from './OrganizationloginStepOne'
import { OrganizationloginStepTwo } from './OrganizationloginStepTwo'
import { Box } from '@chakra-ui/react'
import LayoutWrapper from '../LayoutWrapper/LayoutWrapper'

const OrganizationLogin = () => {
    const [step1,setstep1]=useState(false)
    const PageHandler=()=>{
        setstep1(!step1)
    }
  return (
    <LayoutWrapper>

   
   <Box>
    <Box  display={step1? 'none':'block'} >
        <OrganizationloginStepOne nextStep={PageHandler} />

    </Box>
    <Box display={step1? 'block':'none'}>
        <OrganizationloginStepTwo />
    </Box>

   </Box>
   </LayoutWrapper>
  )
}

export default OrganizationLogin