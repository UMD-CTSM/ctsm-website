import { Autocomplete, AvatarGroup, Box, Button, Card, CardActionArea, CardContent, CardHeader, Chip, Divider, Stack, TextField, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import projectList from "./projectList";
import ProjectModel, { ProjectPageModel, ProjectUrlModel, sponsorLogoDisp } from "./ProjectModel";
import researchAreas, {researchAreasList} from "./researchAreaList";
import React, { useEffect, useState } from "react";
import ResearchAreaModel from "./ResearchAreaModel";


export const ProjectCard = ( {project, sx} :{project:ProjectModel, sx?: any} ) => {
  
  const ProjectCardContent = () => <React.Fragment>
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
  </React.Fragment>;
  return <Card>
    {(project instanceof ProjectUrlModel || project instanceof ProjectPageModel)?<CardActionArea
      sx={sx} {...{href: 
        (project instanceof ProjectUrlModel)?project.url:
        (project instanceof ProjectPageModel)?project.id:undefined}}>
      <ProjectCardContent/>
    </CardActionArea>:<ProjectCardContent/>}
  </Card>;
}

export function ResearchAreaSelect({ onChange } : { onChange : ( area: ResearchAreaModel[] ) => void }) {
  const initDict : {[key:string]: boolean} = {};
  const [ areasSelected, setAreasSelected ] = useState<{[key:string]:boolean}>(researchAreasList.map(r => r.id).reduce((dict, el)=>(dict[el] = false, dict), initDict));
  const toggleAreaSelected = ( r : ResearchAreaModel ) => setAreasSelected({
    ...areasSelected,
    [r.id]: !areasSelected[r.id]
  });
  useEffect(() => onChange(
    Object.entries(areasSelected)
      .filter(([_, selected])=>selected).map(([name, _]) => researchAreas[name as keyof typeof researchAreas])),
    [areasSelected]);
  return <React.Fragment>
    <Autocomplete
        sx={{ display: { xs: 'flex', sm: 'none' }}}
        multiple
        options={researchAreasList}
        getOptionLabel={(r : ResearchAreaModel) => r.name}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Filter by Research Areas"
          />
        )}
      />
    <Stack direction='row' alignItems='center' spacing={2} sx={{overflowX: 'auto', display: { xs: 'none', sm: 'flex' }}}>
      <Typography>Filter By Research Areas:</Typography>
      <Box display='inline-block'>
        {researchAreasList.map(r => <Chip
          variant={(areasSelected[r.id]?"filled":"outlined")}
          key={r.id}
          label={r.name}
          onClick={() => toggleAreaSelected(r)}
          color={(areasSelected[r.id])?"primary":"default"}
          sx={{m: 1}}
        />)}
      </Box>
      <Box>
        <Button onClick={() => setAreasSelected({})}>Clear</Button>
      </Box>
    </Stack>
  </React.Fragment>;
}

export default function ProjectsPage() {
  const [ selectedRAs, setSelectedResearchAreas ] = useState<ResearchAreaModel[]>();

  const [ {projects, pastProjects}, setAllProjects ] = useState<{projects: ProjectModel[], pastProjects: ProjectModel[] }>({ projects:[], pastProjects:[]});

  useEffect(() => {
    let allProjects = projectList();
    console.log('Doing work')
    if ( selectedRAs?.length ) {
      console.log('Doing Filtering')
      allProjects = allProjects.filter( p => p.researchAreas?.reduce(
        (hasOverlap, r) => (hasOverlap = hasOverlap || selectedRAs?.includes(r) || false, hasOverlap),
        false
      ));
    }
    setAllProjects({
      projects: allProjects.filter(p => p.ongoing),
      pastProjects: allProjects.filter(p => !p.ongoing)
    });
  }, [selectedRAs]);
  return <Stack spacing={2}>
    <Typography variant='h1' component='h1' textAlign='center'>Projects</Typography>
    <Typography variant='subtitle1'>
      The CTSM's strength stems from its ability to develop technologies and creatively utilize sophisticated
      analytical tools to meet a set of objectives for decision situations relating to various systems, such as
      defense, homeland security, maritime, infrastructure, facility, health, intelligent and equipment systems.
    </Typography>
    <Divider sx={{my:3}}/>
      <ResearchAreaSelect onChange={setSelectedResearchAreas}/>
    <Divider sx={{my:3}}/>
    <Typography variant='h2' component='h2'>Current Projects</Typography>
    <Grid container spacing={3}>
      {projects.map(project => <Grid xs={12} sm={4}  key={project.id}>
        <ProjectCard project={project}/>
      </Grid>)}
    </Grid>

    <Divider sx={{pt:4}} />

    <Typography variant='h2' component='h2'>Past Projects</Typography>
    <Grid container spacing={3}>
      {pastProjects.map(project => <Grid xs={12} sm={4}  key={project.id}>
        <ProjectCard project={project}/>
      </Grid>)}
    </Grid>
    
  </Stack>
};