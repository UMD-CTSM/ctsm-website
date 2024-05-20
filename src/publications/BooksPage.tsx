import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Unstable_Grid2";

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Button, CardActionArea, CardMedia, CircularProgress,  Divider,  Stack } from '@mui/material';

export const BookCard = ( { book : b } : { book : any} ) => <Card>
  <CardActionArea href={`https://openlibrary.org${b.key}`}>
    {(b.cover_i)?
      <CardMedia
        width='100%'
        component="img"
        sx={{maxHeight: 400}}
        image={`https://covers.openlibrary.org/b/id/${b.cover_i}-M.jpg`}
        alt={b.title}
        loading="lazy"
      />:
      <Typography variant='h4' component='h4' p={2} sx={{height:200, py:22, textAlign: 'center'}}>No cover available</Typography>
    }
  </CardActionArea>
  <CardHeader
    title={b.title}
    titleTypographyProps={{variant: 'body1', fontWeight: 'bold'}}
    subheader={b.publish_year}
  />
</Card>;

const filterList = [
  '/works/OL2681383W',
  '/works/OL25107663W',
  '/works/OL37557499W',
  '/works/OL25102586W',
  '/works/OL25073715W',
  '/works/OL2681380W',
  '/works/OL25189540W',
  '/works/OL16940894W',
  '/works/OL2681387W',
  '/works/OL25234109W',
  '/works/OL2681385W',
  '/works/OL16175777W'
];

export const loadBooks = async ( paramOverride? : any) => {
  const searchUrl = new URL('/search.json?' + new URLSearchParams({
    author: 'OL391465A',
    sort: 'new',
    fields: ['key','first_publish_year','title', 'cover_i', 'editions', 'editions.publish_year', 'editions.key'].join(','),
    'editions.sort': 'new',
    ...paramOverride
  }), 'https://openlibrary.org');
  const j = await (await fetch(searchUrl, {})).json();
  return j.docs.filter((b:any)=>b.cover_i && !filterList.includes(b.key)).map((b:any) => ({...b, publish_year: b.editions.docs[0].publish_year})).sort((a:any,b:any)=> b.publish_year-a.publish_year);
}

export default function BooksPage() {
  const [books, setBooks] = React.useState(Array<any>);
  const [loading, setLoading] = React.useState(true);
  const BOOKS_PER_PAGE = 8;
  const [showAddtlBooks, setShowAddtlBooks] = React.useState(0);
  React.useEffect(() => {
    loadBooks().then( bookList => {
      console.log(bookList);
      setLoading(false);
      setBooks(bookList);
    });
    
    
  }, []);

  return (
        <Stack spacing={2}>
          <Typography component="h3" variant="h3" color="text.primary" sx={{pb: 2}}>
            Published Books
          </Typography>
          <Divider/>
          {(loading)?<CircularProgress />:''}
          <Grid container spacing={2}>
            {books.slice(0,(showAddtlBooks + 1) * BOOKS_PER_PAGE).map(b =>  <Grid xs={6} md={3}>
              <BookCard book={b}/>
            </Grid>
            )}
          </Grid>
          {(books.length >= ((showAddtlBooks + 1) * BOOKS_PER_PAGE))?<Button onClick={() => setShowAddtlBooks(showAddtlBooks + 1)} startIcon={<ExpandMoreIcon/>}>Show more books</Button>:''}
          {(showAddtlBooks > 0)?<Button onClick={() => setShowAddtlBooks(0)} startIcon={<ExpandLessIcon/>}>Hide</Button>:''}
        </Stack>
  );
}
