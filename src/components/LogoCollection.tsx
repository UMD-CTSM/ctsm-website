import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const logos = [
  'https://www.infrastructureclimate.net/static/UMD_ENG_Left_Color_web.png',
  'https://www.infrastructureclimate.net/static/Logo_of_the_United_States_Federal_Railroad_Administration.svg'
];

const logoStyle = {
  height: '80px',
  margin: '0 32px',
};

export default function LogoCollection() {
  const theme = useTheme();

  return (
    <Box id="logoCollection" sx={{ py: 4 }}>
      <Typography
        component="p"
        variant="subtitle2"
        align="center"
        color="text.secondary"
      >
        Sponsored by
      </Typography>
      <Grid container justifyContent="center" sx={{ mt: 0.5, opacity: 0.6 }}>
        {logos.map((logo, index) => (
          <Grid item key={index}>
            <img
              src={logo}
              alt={`Fake company number ${index + 1}`}
              style={logoStyle}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
