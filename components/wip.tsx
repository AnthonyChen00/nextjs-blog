import { Box } from '@mui/system'
import Typography from '@mui/material/Typography'

export const Wip = () => {
  return <>
      <Box sx={{
          width:1,
          height:'100vh',
          display: "flex",
          m: 0,
          p:0,
          bgcolor:'base.main',
          alignItems:"center",
          justifyContent:"center",
         }}>
          <Typography variant="h1">HAHA This is a work in progress. Come back later 😅</Typography>
      </Box>
    </>
          
}