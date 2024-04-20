import { Avatar, AvatarGroup, Box, Button, Card, CardActions, CardContent, CardHeader, Divider, Paper, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";

import projectList from "./projectList";
import { ProjectPageModel, ProjectUrlModel, sponsorLogoDisp } from "./ProjectModel";
import { Link } from "react-router-dom";


export default function ProjectsPage() {
  
  return <Stack spacing={2}>
    <Typography variant='h1' component='h1' textAlign='center'>Our Projects</Typography>
    <Typography variant='subtitle1'>
      The CTSM's strength stems from its ability to develop technologies and creatively utilize sophisticated
      analytical tools to meet a set of objectives for decision situations relating to various systems, such as
      defense, homeland security, maritime, infrastructure, facility, health, intelligent and equipment systems.
    </Typography>
    <Divider sx={{my:3}}/>
    <Typography variant='h2' component='h2'>Current Projects</Typography>
    <Grid container spacing={3}>
      {projectList.filter(p => p.active).map(project => <Grid xs={12} sm={4}><Card>
        <CardContent>
          {/* <Box width='100%'>
            <Box mx='auto'>
              <img src={project.imageUrl()} />
            </Box>
          </Box> */}
          <Typography variant='h5' component='h3'>{project.name}</Typography>
          {(project.fromYear)?<Typography variant='body2'></Typography>:''}
          <Box py={2}>
            {(project instanceof ProjectUrlModel)?
            <Button variant='contained' href={project.url}>Visit Website</Button>:''}
            {(project instanceof ProjectPageModel)?
            <Button variant='outlined' component={Link} to={project.id}>Learn More</Button>:''}
          </Box>
        </CardContent>
        <CardHeader
          avatar={
            <AvatarGroup max={2}> {project.sponsors.map( sponsorLogoDisp )} </AvatarGroup>
          }
          title={`Sponsored by: ${project.sponsors.map(s => s.name).join(', ')}`}
          subheader={project.yearDisp()}
        />
      </Card></Grid>)}
    </Grid>
    

    <Divider sx={{pt:4}} />
    
    <Typography variant='h2' component='h2'>Research Areas</Typography>
    
  </Stack>
};