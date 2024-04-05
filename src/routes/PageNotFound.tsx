import * as React from 'react';
import { Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export default function LandingPage() {

  return (
    <Stack 
    alignItems="center"
    justifyContent='center'
    height='100vh'>
      <Typography variant='h1' component='h1'>404 Page Not Found</Typography>
      <Typography variant='button' component={Link} to='/'>Go back home</Typography>
    </Stack>
  );
}
