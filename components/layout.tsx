import { Header } from "../components/header"
import { Navbar } from "./navbar"
import * as React from "react"
import { Box } from "@mui/material"
import { mainTheme } from "./theme"
import { ThemeProvider } from '@mui/material/styles';



export const Layout = ({children}:{children:any}) => {


  return (
    <div>
      <ThemeProvider theme={mainTheme}>
        <Box sx={{flexGrow:1, bgcolor:'primary.main'}}>
          <Header />
          <Navbar />
          <main>{children}</main>
        </Box>
      </ThemeProvider>
    </div>
  )
}