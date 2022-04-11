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
              backgroundColor: '#FFF6EA',
            },
          },
        }
      },
      
    
})

export {theme};
