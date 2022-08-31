import { createTheme } from '@mui/system'

export const mainTheme = createTheme({
    palette: {
      type:"light",
      primary: {
        main: "#212F3F",
      },
      secondary: {
        main: '#f10260',
      },
      base: {
        main: "#dfe0f7",
        dark: "#000000",
      }
    },
    spacing:0,
    typography: {
        fontSize: 40,
        h1: {
          fontSize: '4.0rem',
        },
      },
  });