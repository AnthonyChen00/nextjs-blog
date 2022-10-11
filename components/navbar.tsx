import Toolbar from '@mui/material/Toolbar';
import { Typography } from "@mui/material";
import { AppBar, Box, Button } from '@mui/material';

export const pages = [{name: "Dev", id:"Dev" ,site: "#Dev"}, {name: "Photos",id:"Photos", site: "#Photos"}, {name: "About Me",id:"About", site: "#About"}]


export const Navbar = () => {
  return <AppBar>
    <Toolbar>
        <Button key="/" href="/" sx={{ my: 2, color: 'white', display: 'block' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            Anthony Chen
          </Typography>
        </Button>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',  } }}>
            {pages.map((page) => (
              <Button
                key={page.site}
                href={page.site}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Typography align='center'>{page.name}</Typography>
              </Button>
            ))}
          </Box>
      </Toolbar>
  </AppBar>
}