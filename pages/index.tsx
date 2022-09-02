import type { NextPage } from 'next'
import * as React from 'react'
import { ThemeProvider } from '@mui/system'
import { mainTheme } from '../components/theme'
import { Wip } from '../components/wip'
import { pages } from '../components/navbar'

const Home: NextPage = () => {
  return (
      <ThemeProvider theme={mainTheme}>
        {pages.map((page)=> (
          <div id={page.id} key={page.name}>
            <Wip />
          </div>
        ))}
      </ThemeProvider>
  )
}

export default Home
