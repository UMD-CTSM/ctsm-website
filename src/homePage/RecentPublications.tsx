import React, { useEffect, useState } from "react";

import { Box, Button, Card, CardContent, Container, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import { loadPapers } from "../publications/PapersPage";
import courseList from "../publications/CourseList";
import { CourseCard } from "../publications/CoursesPage";
import { Link } from "react-router-dom";
import { BookCard, loadBooks } from "../publications/BooksPage";

export default function RecentPublications() {
  const [papers, setPapers] = useState([]);
  const [books, setBooks] = useState([]);
  
  useEffect(() => {
    loadPapers({rows: 10}).then((p : any) => {
      setPapers(p.slice(0,3));
    });
    
    loadBooks({q:'key:("/works/OL38068323W" OR "/works/OL21040912W")'}).then((b : any) => {
      console.log(b);
      setBooks(b);
    });

  }, []);

  return <Container sx={{py:2}}>
    <Typography variant="h2" component='h2' sx={{pb: 2}} textAlign='center'>Recent Publications</Typography>
    <Grid container spacing={2}>
      <Grid xs={12} md={4}>
        <Typography variant='h4' component='h3'>Papers</Typography>
        <Stack spacing={1}>
          {papers.map((p : any) => <Card key={p.URL}>
            <CardContent>
              <Typography variant='body1'>{p.title}</Typography>
              <Typography variant='caption'>{p.authorStr}</Typography>
            </CardContent>
          </Card>)}
        </Stack>
      </Grid>
      <Grid xs={12} md={4}>
        <Typography variant='h4' component='h3'>Courses</Typography>
        <Stack spacing={1}>
          {courseList.map(c=><CourseCard course={c} key={c.id}/>)}
        </Stack>
      </Grid>
      <Grid xs={12} md={4}>
        <Typography variant='h4' component='h3'>Books</Typography>
        <Grid container columns={2} spacing={2}>
          {books.map((b:any) => <Grid xs={1} key={b.key}>
            <BookCard book={b}/>
          </Grid>)}
        </Grid>
      </Grid>
    </Grid>
    <Box width='100%' p={2}>
      <Button
        variant='text'
        sx={{width:'100%'}}
        component={Link}
        to='publications'
      >More...</Button>
    </Box>
  </Container>;
}