import { Box, Button, Stack, Typography } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Crepi2Description () {
  return <Stack spacing={2} alignItems='center'>
    <Typography variant='body1' >
      <Box sx={{float: 'left'}} width={{xs: '100%', sm: '450px'}} p={4}>
        <img src='/images/projects/crepi2/ASCE-NOAA-UMD-Logos.png' width='100%' alt='ASCE, NOAA and UMD Logos' />
      </Box>
      The vast majority of building codes in the United States and abroad rely on consensus guidance provided by the American
      Society of Civil Engineers (ASCE), the nation's oldest engineering society. With climate change continuing to worsen,
      the National Oceanic and Atmospheric Administration (NOAA) <a href='https://cpo.noaa.gov/'>Climate Program Office (CPO)</a> has forged a partnership with
      the University of Maryland (UMD) Center for Technology and Systems Management (CTSM) and the American Society of
      Civil Engineers (ASCE) to help the nation account for climate change in future infrastructure design and construction
      to accelerate the development of climate-smart engineering codes and standards.
    </Typography>
    <Typography variant='body1'>
      <a href='https://www.asce.org/initiatives/asce-noaa-taskforce'>ASCE-NOAA Task Force on Climate Resilience in Engineering Practice</a> was established in 2021 for facilitate the climate adaptation of engineering practices and infrastructure.
      This partnership between NOAA, the nation's largest provider of climate information, ASCE, the world's largest civil
      engineering professional society, and the UMD center with a focus on systems engineering will
      help the nation account for climate change in future infrastructure design and construction.
    </Typography>
    <Typography>
      <Button variant='outlined' sx={{m:5, px: 5, py: 2}} href='https://www.asce.org/initiatives/asce-noaa-taskforce'>
      More info on ASCE-NOAA Task Force
      </Button>
      <Button variant='contained' color="error" sx={{m:5, px: 5, py: 2}} href='https://www.youtube.com/playlist?list=PLKTTDX0F3fMBBFr2hH42zuX7t_fPcsEiG' startIcon={<YouTubeIcon/>} >
      Visit the Task Force Youtube Channel
      </Button>
    </Typography>
    <Typography variant='h4'>
    Most Recent Task Force Update or Video
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
    <Typography py={2}>
    The ASCE-NOAA Task Force released their first document that summarizes the discussions between civil engineers and climate scientists on how to best integrate
    nonstationarity with extreme temperature, intense rainfall, straight-line wind, and coastal hazards into civil engineering planning.  The report is available at <a href='https://doi.org/10.25923/e8kn-n884'>https://doi.org/10.25923/e8kn-n884</a>
    &nbsp;(<a href='https://www.asce.org/publications-and-news/civil-engineering-source/article/2023/08/03/new-asce-noaa-report-details-tangible-needs-progress-toward-climate-resilient-infrastructure'>see article</a> for more information). The Task Force
    plans to develop additional documents based on the ongoing discussions and interactions among ASCE, NOAA, and as appropriate other agencies to meet the
    ASCE-NOAA Memorandum of Understanding (<a href='https://www.noaa.gov/sites/default/files/2023-02/MOU_between_the_American_Society_of_Civil_Engineers_and_NOAA.pdf'>MOU</a>) commitments (see <a href='https://www.noaa.gov/news-release/agreement-between-noaa-asce-prepares-nation-for-climate-ready-infrastructure'>news release</a> for more details).  
    </Typography>
  </Stack>
}