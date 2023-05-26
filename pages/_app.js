// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'


import "@fontsource/rajdhani"

import LayoutWrapper from '../src/components/core/LayoutWrapper/LayoutWrapper'




import { mynewtheme } from '../src/theme'

function Marketplace({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={mynewtheme}>
     
       
      <LayoutWrapper>

     
        <Component {...pageProps} />
        </LayoutWrapper>
       
     
    </ChakraProvider>
  )
}

export default Marketplace