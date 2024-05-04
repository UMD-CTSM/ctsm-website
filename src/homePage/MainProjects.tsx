import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import projectListFn from "../projects/projectList";
import { ProjectCard } from "../projects/ProjectsPage";
import { Link } from "react-router-dom";

export default function MainProjects() {
  const projects = projectListFn();
  return <Container sx={{py: 2}}>
    <Typography variant='h2' component='h2' sx={{pb: 2}}  textAlign='center'>Current Projects</Typography>
    <Grid container spacing={3}>
      {projects.filter(p => p.ongoing).splice(0,3).map(project => <Grid xs={12} sm={4} key={project.id}>
        <ProjectCard project={project} key={project.id}/>
      </Grid>)}
    </Grid>
    <Box width='100%' position='relative' p={2}>
      <Button
        variant='text'
        sx={{width:'100%'}}
        component={Link}
        to='research'
      >View More</Button>
    </Box>
  </Container>;
};