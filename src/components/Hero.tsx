import * as React from 'react';
import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import logo from '../images/logo.png';

export default function Hero() {
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <img src={logo} style={{width:200}} alt=''/>
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            component="h1"
            variant="h2"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
            }}
          >
            Infrastructure-Climate Networks
          </Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
            The Infrastructure-Climate Networks (ICN) is an initiative of&nbsp;
            <Link href="https://ctsm.umd.edu/">UMD's Center for Technology and Systems Management (CTSM)</Link> provides a collection of tools for analyzing infrastructure networks for performance, reliability resilience.
            The underlying methods and tools are developed by researchers of&nbsp;
            <Link href="https://ctsm.umd.edu/">CTSM</Link> from
            the <Link href="https://cee.umd.edu/">Department of Civil and Environmental Engineering (CEE)</Link> at the <Link href="https://umd.edu/">University of Maryland (UMD)</Link>.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
