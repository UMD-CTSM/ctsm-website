import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import bg1 from "../images/bg1.jpg";

export default function AboutUs() {
  return (
    <Box
      id="about"
      sx={(theme) => ({
        width: '100%',
        backgroundImage: `url(${bg1})`,
        backgroundAttachment: 'fixed',
        backgroundPositionY: 'center'
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 8, sm: 12 },
          pb: { xs: 5, sm: 8 },
          
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '90%' }, 
          pt: { xs: 4, sm: 6 },
          pb: { xs: 4, sm: 6 },
          pl: { xs: 2, sm: 4},
          pr: { xs: 2, sm: 4},
          background: 'rgba(256,256,256,.8)'}}>
          <Typography
            component="h2"
            variant="h2"
          >
            About ICN
          </Typography>
          <Typography variant="subtitle1">
            The ICN initiative supports <Link href="https://ctsm.umd.edu">CTSM's</Link> pursuit of developing methods and
            tools for equitable climate-resilient and sustainable infrastructure.
          </Typography>
          <Typography>
            With a motto of <b>Technology for Intelligent Decisions</b>, CTSM develops technologies and creatively utilizes
            sophisticated analytical tools to meet sets of objectives for making decisions in various systems.
          </Typography>
          <Typography>
          Members: Dr. <Link href="mailto:ba@umd.edu">Bilal M. Ayyub</Link> (ICN Lead), Mr. Yujie Mao,
          Mr. Sherief Elsibaie, Mr. Nathan Chan,
          Dr. Magdy Elsibaie, and Dr. Yating Zhang
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
