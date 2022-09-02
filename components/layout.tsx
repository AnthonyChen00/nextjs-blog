import { Header } from "../components/header"
import { Navbar } from "./navbar"
import * as React from "react"
import { Box } from "@mui/material"


export const Layout = ({children}:{children:any}) => {
  return (
    <Box sx={{flexGrow:1}}>
      <Header />
      <Navbar />
      <main>{children}</main>
    </Box>
  )
}