import { createTheme } from "@mui/material/styles";


const theme=createTheme({
    typography:{
        fontFamily: [
            
            
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(',')
    },
    components: {
        // Name of the component
        MuiPaper: {
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              backgroundColor: '#EEEDE7',
            },
          },
        },
        
      },
      palette:{
        primary:{
          main:"#05445E"
        }
      }
      
    
})

export {theme};
