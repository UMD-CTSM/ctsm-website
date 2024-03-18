import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import noaaLogo from '../images/logos/noaa.png';
import bseeLogo from '../images/logos/bsee.png';
import fraLogo from '../images/logos/fra.svg';
import nistLogo from '../images/logos/nist.png';
import oesiLogo from '../images/logos/oesi.png';
import qatarFoundLogo from '../images/logos/qatar.png';
import mccLogo from '../images/logos/mcc.png';
import doeLogo from '../images/logos/doe.png';
import teesLogo from '../images/logos/tees.svg';

const logos = [
  {url:'https://noaa.gov/', logo: noaaLogo},
  {url: 'https://railroads.dot.gov/', logo: fraLogo},
  {url: 'https://www.nist.gov/', logo: nistLogo},
  {url: 'https://oesi.tamu.edu/', logo: oesiLogo},
  {url: 'https://tees.tamu.edu/', logo: teesLogo},
  {url: 'https://www.energy.gov/', logo: doeLogo},
  {url: 'https://bsee.gov/', logo: bseeLogo},
  {url: 'https://www.qf.org.qa/', logo: qatarFoundLogo},
  {url: 'https://www.mcc.gov/', logo: mccLogo}
];

export default function LogoCollection() {
  return (
    <Box id="sponsors" sx={{ py: 4 }}>
      <Typography
        component="h2"
        variant="h2"
        align="center"
        color="text.secondary"
      >
        Sponsors
      </Typography>
      <Grid container justifyContent="center" sx={{ mt:5, opacity: 0.6 }}>
        {logos.map((sponsor, index) => (
          <Grid item key={index} sx={{
            margin: '0 32px',
            height: '80px',
            maxWidth: '100px',
            display: 'flex',
            alignItems: 'center',
          }}>
            <a href={sponsor.url}>
            <img
              src={sponsor.logo}
              style={{
                width: '100%',
                margin: 'auto'
              }}
              alt={sponsor.url}
            /></a> 
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
