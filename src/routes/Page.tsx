import { Outlet } from "react-router-dom";
import AppAppBar from "../components/AppAppBar";
import React from "react";
import { Box, Container } from "@mui/material";
import { useMatches } from "react-router-dom";
import Footer from "../components/Footer";

export default function LandingPage() {
  const matches = useMatches();
  const fullWidth = matches.reduce((hasFullWidth, match : any) => match.handle?.fullWidth || hasFullWidth, false);
  const FullWidthEl = () => <React.Fragment>
    {(fullWidth)?
      <Outlet /> :
      <Container>
        <Outlet/>
      </Container>
    }
  </React.Fragment>;

  const topMargin = matches.reduce(
    (hasFullWidth, match : any) => (
      match.handle?.topMargin === undefined || match.handle?.topMargin === true
    ) && hasFullWidth,
    true
  );
  
  return (
    <React.Fragment>
      <AppAppBar/>
      {
        (topMargin)? <Box mt={15}><FullWidthEl/></Box> : <FullWidthEl/>
      }
      <Footer />
    </React.Fragment>
  );
}