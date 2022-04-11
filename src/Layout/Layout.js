
import { Box } from '@mui/system'
import React from 'react'
import {AppBarCom} from '../Components/Appbar'


const Layout = ({children}) => {
  
  return (
    <>
    <AppBarCom/>
    <Box style={{minHeight:'95vh'}}>
    {children}
    
    </Box>
    <footer>This is footer inbuilt</footer>
    </>
  )
}

export default Layout