import React, { useState } from "react";
import PeopleList from "./peopleList";
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Person, PersonLocal, PersonUrl, PersonCategoryType } from "./PersonModel";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import PersonIcon from '@mui/icons-material/Person';

const DATE_NOW =  new Date();

const CATEGORY_TITLE : { [K in PersonCategoryType]:string } = {
  'faculty': 'Faculty',
  'advisor': 'Advisors',
  'student': 'Students',
  'alumni': "Alumni"
};

export default function People() {
  const peopleByCategory = PeopleList.reduce((byCategory : {[K in PersonCategoryType]? : Person[]}, person : Person) => {
    if ( !byCategory[person.category] ) {
      byCategory[person.category] = [];
    }
    byCategory[person.category]?.push(person);
    return byCategory;
  }, {});


  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <Typography variant='h2' component='h1' py={2}>Team</Typography>
      </Grid>
      {Object.entries(peopleByCategory).map(([categoryName,people]) => {
        const categoryName2 : PersonCategoryType = categoryName as PersonCategoryType;
        if (categoryName2 === 'student') {
          people = people.sort((a, b) => (a?.activeTill?.getTime() || 10000) - (b?.activeTill?.getTime() || 10000));
        } else {
          people = people.sort((a, b) => a.name.localeCompare(b.name));
        }
        return <React.Fragment>
          <Grid xs={12}>
            <Typography variant='h3' component='h2'>{CATEGORY_TITLE[categoryName2]}</Typography>
          </Grid>
          <PersonList personList={people}/>
        </React.Fragment>;
      })}
    </Grid>
  );
}


const PersonList = ({personList} : {personList : Person[]}) =>{

  return <React.Fragment>
    {personList.filter(p => !p.activeTill || p.activeTill > DATE_NOW ).map(person => 
      <Grid xs={6} sm={3} md={2}>
        <PersonCard person={person}/>
      </Grid>
    )}
  </React.Fragment>;
}

export const PersonCard = ({person}: {person: Person}) => {
  const personUrl =
    (person instanceof PersonUrl)? person.url:
    (person instanceof PersonLocal)? (person.url || '/team/' + person.id) : null;
  const [imageMissing, setImageMissing] = useState(false);
  const cardBody = <React.Fragment>
    {imageMissing? null:
    <CardMedia
      component='img'
      height='200'
      image={person.imageUrl()}
      onError={() =>setImageMissing(true)}
    />}
    
    <CardContent>
      {imageMissing? 
<Box
  display="flex"
  justifyContent="center"
  alignItems="center"
><PersonIcon sx={{fontSize: 200, textAlign: 'center'}}/></Box>: null}
      <Typography variant='h6'>{person.name}</Typography>
      <Typography variant='caption'>{person.primaryAffiliation()}</Typography>
    </CardContent>
  </React.Fragment>;
  return <Card key={person.name}>
    {
      (personUrl)?
        <CardActionArea component={Link} to={personUrl}>{cardBody}</CardActionArea>:
        <CardActionArea>{cardBody}</CardActionArea>
    }
  </Card>;
}