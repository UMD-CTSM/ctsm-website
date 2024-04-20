import * as React from 'react';
import Divider from '@mui/material/Divider';
import AppAppBar from '../components/AppAppBar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import { Box } from '@mui/material';
import ResearchAreas from '../homePage/ResearchAreas';


export default function LandingPage() {

  return (
    <Box>
      <Hero />
      <ResearchAreas/>
      Short Description
      Our Research
      BIG: Current Research PROJECT

      Other areas
      Recent Publications
      <Features />
      <Divider />
      Our Team
      <Testimonials />
      <ContactUs />
    </Box>
  );
}
