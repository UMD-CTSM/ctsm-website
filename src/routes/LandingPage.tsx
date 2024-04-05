import * as React from 'react';
import Divider from '@mui/material/Divider';
import AppAppBar from '../components/AppAppBar';
import Hero from '../components/Hero';
import LogoCollection from '../components/LogoCollection';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import { Box } from '@mui/material';


export default function LandingPage() {

  return (
    <Box>
      <Hero />
      <AboutUs />
      <Features />
      <Divider />
      <Testimonials />
      <LogoCollection />
      <ContactUs />
      <Footer />
    </Box>
  );
}
