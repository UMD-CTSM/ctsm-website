import { AvatarGroup, Card, CardActionArea, CardContent, CardHeader, Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import projectList from "./projectList";
import ProjectModel, { ProjectPageModel, ProjectUrlModel, sponsorLogoDisp } from "./ProjectModel";


export const ProjectCard = ( {project, sx} :{project:ProjectModel, sx?: any} ) => <Card>
  <CardActionArea
     sx={sx} {...{href: 
      (project instanceof ProjectUrlModel)?project.url:
      (project instanceof ProjectPageModel)?project.id:undefined}}>
    <CardContent>
      <Typography variant='h5' component='h3'>{project.name}</Typography>
    </CardContent>
    <CardHeader
      avatar={
        <AvatarGroup max={2}> {project.sponsors.map( sponsorLogoDisp )} </AvatarGroup>
      }
      title={`Sponsored by: ${project.sponsors.map(s => s.name).join(', ')}`}
      subheader={project.yearDisp()}
    />
  </CardActionArea>
</Card>;

export default function ProjectsPage() {
  const projects = projectList();
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
      {projects.filter(p => p.active).map(project => <Grid xs={12} sm={4}  key={project.id}>
        <ProjectCard project={project}/>
      </Grid>)}
    </Grid>
    

    <Divider sx={{pt:4}} />
    
    <Typography variant='h2' component='h2'>Research Areas</Typography>

    <Divider sx={{pt:4}} />

    <Typography variant='h2' component='h2'>Past Projects</Typography>
    
  </Stack>
};