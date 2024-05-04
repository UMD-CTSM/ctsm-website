import { Button, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import icn_logo from '../images/icn_logo.png';

export default function ToolsPage() {
  return <Grid container spacing={2}>
    <Grid xs={12}>
      <Typography variant='h1' component='h1'>Tools</Typography>
      <Divider/>
    </Grid>
    <Grid xs={12} container display='flex'>
      <Grid xs={12}>
        <Typography variant='h2' component='h2'>Infrastructure-Climate Networks</Typography>
      </Grid>
      <Grid xs={12} sm={4} textAlign='center'>
        <img src={icn_logo} height={200}/>
      </Grid>
      <Grid xs={12} sm={8} sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          flexGrow: 1
        }}>
        <Typography py={2}>The Infrastructure-Climate Networks (ICN) is an initiative of UMD's Center for Technology and Systems Management (CTSM) to develop and provide analysis methods and tools of infrastructure networks for performance, reliability, resilience, risk and economics subjected to natural and human-caused hazards with climate mitigation and adaptation considerations for sustainability. The underlying methods and tools are developed by researchers of CTSM from the Department of Civil and Environmental Engineering (CEE) at the University of Maryland (UMD).</Typography>
        <Typography py={2}>
          <Button variant='contained' href='https://infrastructureclimate.net'>Visit Website</Button>
        </Typography>
      </Grid>
      <Grid xs={12}><Divider/></Grid>
      <Grid xs={12}>
        <Typography textAlign='center' py={2}>Other tools to come soon...</Typography>
      </Grid>
    </Grid>
    
  </Grid>
};