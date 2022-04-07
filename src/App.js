import {LandingPage} from './Container'
import {theme} from './_theme'
import {ThemeProvider} from '@mui/material/styles'

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
    <LandingPage/>
    </ThemeProvider>
    </>
  );
}

export default App;
