import { createTheme } from '@mui/system'

export const mainTheme = createTheme({
    palette: {
      type:"light",
      primary: {
        main: "#766153",
      },
      secondary: {
        main: '#f10260',
      },
      base: {
        main: "#BCBD8B",
        dark: "#000000",
      },
      font: {
        main: "#373D20",
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