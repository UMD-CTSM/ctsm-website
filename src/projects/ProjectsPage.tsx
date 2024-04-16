import { Card, Divider, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import projectList from "./projectList";

export default function ProjectsPage() {
  
  return <React.Fragment>
    <Typography variant='h1' component='h1' textAlign='center'>Our Projects</Typography>
    <Typography variant='body1'  textAlign='center'>
      CTSM is focused on doing research of this kind.
    </Typography>
    <Divider sx={{my:3}}/>
    <Typography variant='h2' component='h2'>Current Projects</Typography>
    {projectList.map(project => <Paper sx={{p:5}}>
      <Grid container spacing={4}>
        <Grid xs={12} sm={4}>
          <img src={project.imageUrl()} width='100%' />
        </Grid>
        <Grid xs={12} sm={8}>
          <Typography variant='h3' component='h3' sx={{pb:4}}>{project.name}</Typography>
          <Typography variant='body1'>{project.description}</Typography>
        </Grid>
      </Grid>
    </Paper>)}
  </React.Fragment>
};