import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import noaaLogo from './sponsor_logos/noaa.png';
import bseeLogo from './sponsor_logos/bsee.png';
import fraLogo from './sponsor_logos/fra.svg';
import nistLogo from './sponsor_logos/nist.png';
import oesiLogo from './sponsor_logos/oesi.png';
import qatarFoundLogo from './sponsor_logos/qatar.png';
import mccLogo from './sponsor_logos/mcc.png';
import doeLogo from './sponsor_logos/doe.png';
import teeLogo from './sponsor_logos/tee.svg';
import tjuLogo from './sponsor_logos/tju.png';
import { Container } from '@mui/material';

const logos = [
  {url: 'https://noaa.gov/', logo: noaaLogo},
  {url: 'https://railroads.dot.gov/', logo: fraLogo},
  {url: 'https://www.nist.gov/', logo: nistLogo},
  {url: 'https://oesi.tamu.edu/', logo: oesiLogo},
  {url: 'https://tees.tamu.edu/', logo: teeLogo},
  {url: 'https://www.energy.gov/', logo: doeLogo},
  {url: 'https://bsee.gov/', logo: bseeLogo},
  {url: 'https://www.qf.org.qa/', logo: qatarFoundLogo},
  {url: 'https://www.mcc.gov/', logo: mccLogo},
  {url: 'https://en.tongji.edu.cn/', logo: tjuLogo}
];

export default function SponsorLogos() {
  return (<Container sx={{py:2}}>
    <Box id="sponsors" sx={{ py: 4 }}>
      <Typography
        component="h2"
        variant="h2"
        align="center"
        color="text.secondary"
      >
        Sponsors
      </Typography>
      <Grid container justifyContent="center" sx={{ mt:5, opacity: 0.75 }}>
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
    </Box></Container>
  );
}
