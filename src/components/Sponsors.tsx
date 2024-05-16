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
import { sponsorList } from '../projects/sponsorList';

export default function Sponsors() {
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
        {sponsorList.map((sponsor, index) => (
          <Grid item key={index} sx={{
            margin: '0 32px',
            height: '80px',
            maxWidth: '100px',
            display: 'flex',
            alignItems: 'center',
          }}>
            <a href={sponsor.url}>
            <img
              src={sponsor.imageUrl()}
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
