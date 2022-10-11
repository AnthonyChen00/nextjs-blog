import { createTheme } from "@mui/material/styles"

export const mainTheme = createTheme({
    palette: {
      primary: {
        main: "#E9EDC9",
      },
      secondary: {
        main: '#CCD5AE',
      },
    },
    typography: {
        fontSize: 20,
        h1: {
          fontSize: '2.0rem',
        },
      },
    components: {
      MuiAppBar: {
        styleOverrides: {
          colorPrimary: {
            backgroundColor: "#D4A373"
          }
        }
      }
    }
  });