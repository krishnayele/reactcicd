import {LandingPage} from './Container'
import {theme} from './_theme'
import Layout from './Layout/Layout'
import {ThemeProvider} from '@mui/material/styles'
import  './App.css'

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Layout className={App} >
    <LandingPage/>
    </Layout>
    </ThemeProvider>
   
    </>
  );
}

export default App;
