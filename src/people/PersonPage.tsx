import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import peopleList from "./peopleList";
import { useLoaderData } from "react-router-dom";
import { Person, PersonLocal } from "./PersonModel";
import Grid from '@mui/material/Unstable_Grid2';

export async function personLoader({ params } : any) {
  const person = peopleList.find( p => p.id === params.id);
  return {person};
}

export default function PersonPage() {
  const { person } = useLoaderData() as { person: PersonLocal};
  return <React.Fragment>
    <Stack textAlign='center'
    justifyContent="flex-start"
    alignItems="center"
    spacing={3}>
      <Avatar
        // alt={person.name}
        src={person.imageUrl()}
        sx={{ width: 200, height: 200 }}
      />
      <Typography variant='h2' component='h1'>{person.name}</Typography>
      </Stack>
      <Divider variant='middle' sx={{my: 3}}/>
      <Grid container spacing={4}>
        <Grid xs={12} sm={4}>
          <p><a href={`mailto:${person.email}`}>{person.email}</a></p>
          <p><a href={`tel:${person.phone_number}`}>{person.phone_number}</a></p>
          <ul>{person.affiliations.map(a => <li>{a}</li>)}</ul>
        </Grid>
        <Grid xs={12} sm={8}>
          {person.description}
        </Grid>
      </Grid>
  </React.Fragment>;
};