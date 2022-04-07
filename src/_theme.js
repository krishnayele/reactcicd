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
        },
        MuiButton:{
            styleOverrides: {
                // Name of the slot
                root: {
                  // Some CSS
                  backgroundColor: '#EBD8C3',
                  color:'#000000'
                },
              },
        }
      },
      palette:{
          primary:{
              main:'#FFEEEE',
              light:'#FFEE0',
              contrastText:'#ffffff'
          },
          secondary:{
              main:"#FFF6EA",
              light:"#FFF6E0",
              contrastText:"#ffffff"
          }
      }
    
})

export {theme};
