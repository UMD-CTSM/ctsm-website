import { Box, Divider, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import ProjectModel, { sponsorLogoDisp } from "./ProjectModel";
import projectList from "./projectList";



export async function projectLoader({ params } : any) {
  const project = projectList().find( p => p.id === params.id);
  return {project};
}

export default function ProjectPage() {
  const { project } = useLoaderData() as { project: ProjectModel};
  return <React.Fragment>
    <Typography variant='h3' component='h1'>{project.name}</Typography>
    <Typography variant='body2'>
      {project.yearDisp()}
    </Typography>
    <Paper sx={{p: 2, my: 2}}>
      <Typography variant='h5'>Sponsors</Typography>
      {project.sponsors.map(s => 
      <Stack direction='row' alignItems='center' spacing={2}>
        {sponsorLogoDisp(s)} <Typography variant='body1' component={Link} to={s.url}>{s.name}</Typography>
      </Stack>)}
    </Paper>
    <Divider sx={{my:3}}/>
    {project.description}
  </React.Fragment>
};