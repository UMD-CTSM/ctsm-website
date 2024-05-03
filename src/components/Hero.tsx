import { alpha } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
              textAlign: 'center',
            }}
          >
            Center for Technology and Systems Management
          </Typography>
          <Typography variant="subtitle1" textAlign='center'>Technology for Intelligent Decisions</Typography>
          <Typography variant="body1" textAlign="center" color="text.secondary">
          The CTSM's strength stems from its ability to develop technologies and creatively utilize sophisticated analytical
          tools to meet a set of objectives for decision situations relating to various systems, such as defense, homeland security,
          maritime, infrastructure, facility, health, intelligent and equipment systems. The technologies and systems are further
          defined in the context of many industries. Using a matrix structure of technologies and systems, several primary thrust
          areas were identified to constitute primary interests and the scope for the center by capitalizing on existing resources,
          including the University of Maryland at-large.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
