import Divider from '@mui/material/Divider';
import Hero from '../components/Hero';
import { Stack } from '@mui/material';
import RecentPublications from './RecentPublications';
import TeamSummary from './TeamSummary';
import MainProjects from './MainProjects';
import SponsorLogos from './SponsorLogos';


export default function LandingPage() {
  return (
    <Stack spacing={3} alignItems='center'>
      <Hero />
      <Divider sx={{width:'100%'}}/>
      <MainProjects/>
      <Divider sx={{width:'100%'}}/>
      <TeamSummary/>
      <Divider sx={{width:'100%'}}/>
      <RecentPublications/>
      <Divider sx={{width:'100%'}}/>
      <SponsorLogos/>
    </Stack>
  );
}
