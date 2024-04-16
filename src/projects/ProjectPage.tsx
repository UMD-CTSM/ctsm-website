import { Divider, Typography } from "@mui/material";
import React from "react";

export default function ProjectPage() {
  return <React.Fragment>
    <Typography variant='h1' component='h1'>Project</Typography>
    <Typography variant='caption'>
      CTSM is focused on doing research of this kind.
    </Typography>
    <Divider sx={{my:3}}/>
  </React.Fragment>
};