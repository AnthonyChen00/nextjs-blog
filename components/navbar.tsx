import Toolbar from '@mui/material/Toolbar';
import { Typography } from "@mui/material";
import { AppBar, Box, Button } from '@mui/material';

export const pages = [{name: "Photography",id:"Photography", site: "#Photography"}, {name: "Dev Portfolio", id:"Dev" ,site: "#Dev"}, {name: "About Me",id:"About", site: "#About"}]


export const Navbar = () => {
  return <>
  <AppBar position="fixed">
    <Toolbar>
      <Button key="/" href="/" sx={{ my: 2, color: 'white', display: 'block' }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "palette.font.main" }}>
          Anthony Chen
        </Typography>
      </Button>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map((page) => (
            <Button
              key={page.site}
              href={page.site}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page.name}
            </Button>
          ))}
        </Box>
    </Toolbar>
  </AppBar>
  </>
}