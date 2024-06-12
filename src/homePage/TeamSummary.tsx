import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import peopleList, { leadResearcher } from "../people/peopleList";
import { PersonCard } from "../people/PeoplePage";
import { Link } from "react-router-dom";

export default function TeamSummary() {
  const filteredPeople = peopleList.filter(p => p.id !== 'ayyub' && p.homepage).concat(
    peopleList.filter(p => p.category === 'student')
    .sort((a,b)=>(((a.activeTill)?a.activeTill.getTime():1) - ((b.activeTill)?b.activeTill.getTime():0)))
  ).slice(0,6);
  return <Container sx={{py:2}}>
  <Typography variant='h2' component='h2' sx={{pb: 5}}  textAlign='center'>Team</Typography>
  <Grid container spacing={2}>
    <Grid xs={12} sm={4} p={3}>
      <Box position='relative' height='0' pb='100%'>
        <Avatar
          src={leadResearcher.imageUrl()}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />
      </Box>
    </Grid>
    <Grid xs={12} sm={8}>
      <Typography variant='h3' component='h3'>{leadResearcher.name}</Typography>
        {leadResearcher.affiliations.map(a => 
      <Typography variant='caption' py={1}>{a}<br/></Typography>)}
      <Typography variant='caption'>
        <a href={`mailto:${leadResearcher.email}`}>{leadResearcher.email}</a>,&nbsp;
        <a href={`tel:${leadResearcher.phone_number}`}>{leadResearcher.phone_number}</a>
      </Typography>
      {leadResearcher.description}
    </Grid>
    <Grid xs={12}>
      {/* <Typography variant='h3' component='h3' py={3} textAlign='center'>Our other team members</Typography> */}
    </Grid>
    {filteredPeople.map(p =>
      <Grid xs={6} sm={3} md={2}>
        <PersonCard person={p} key={p.id}/>
      </Grid>
    )}
    <Grid xs={12}>
      <Button
          variant='text'
          sx={{width:'100%'}}
          component={Link}
          to='team'
        >More...</Button>
    </Grid>
  </Grid>
</Container>;
}