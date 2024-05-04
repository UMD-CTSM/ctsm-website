import { Box, Button, Stack, Typography } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Crepi2Description () {
  return <Stack spacing={2} alignItems='center'>
    <Typography variant='body1' >
      <Box sx={{float: 'left'}} width={{xs: '100%', sm: '300px'}} p={4}>
        <img src='/images/projects/crepi2/ASCE-NOAA-UMD-Logos.png' width='100%' />
      </Box>
      The vast majority of building codes in the United States and abroad rely on consensus guidance provided by the American
      Society of Civil Engineers (ASCE), the nation's oldest engineering society. With climate change continuing to worsen,
      the National Oceanic and Atmospheric Administration (NOAA) Climate Program Office has forged a partnership with
      the University of Maryland (UMD) Center for Technology and Systems Management (CTSM) and the American Society of
      Civil Engineers (ASCE) to help the nation account for climate change in future infrastructure design and construction.
      to accelerate the development of climate-smart engineering codes and standards.
    </Typography>
    <Typography variant='body1'>
      This partnership between NOAA, the nation's largest provider of climate information, ASCE, the world's largest civil
      engineering professional society, and the UMD center with a focus on systems engineering will
      help the nation account for climate change in future infrastructure design and construction.
    </Typography>
    <Box>
      <Button variant='contained' sx={{m:5, px: 5, py: 2}} href='https://www.asce.org/initiatives/asce-noaa-taskforce'>
      More info on ASCE-NOAA Task Force
      </Button>
      <Button variant='contained' color="error" sx={{m:5, px: 5, py: 2}} href='https://www.youtube.com/playlist?list=PLKTTDX0F3fMBBFr2hH42zuX7t_fPcsEiG' startIcon={<YouTubeIcon/>}>
      Visit the Youtube Channel of "ASCE-NOAA Task Force on Climate Resilience in Engineering Practice"
      </Button>
    </Box>
    <Typography variant='h4'>
      Task Force Updates and other videos
    </Typography>
    <Box width={{xs: '100%', sm: '75%'}} mt={20}>
      <Box position='relative' paddingBottom='56.25%' height={0}>
        <iframe style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        }} src="https://www.youtube.com/embed/?listType=playlist&list=PLKTTDX0F3fMBBFr2hH42zuX7t_fPcsEiG" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </Box>
    </Box>
  </Stack>
}