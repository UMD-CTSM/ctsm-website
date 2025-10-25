import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Button, CardActions, CircularProgress,  Divider,  Stack } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { Archive } from '@mui/icons-material';

export const loadPapers = async ( paramsOverride : any = undefined) => {
  const params = new URLSearchParams({
    facet:'type-name:*',
    mailto: 'ctsm@umd.edu',
    'query.contributor': 'Bilal M. Ayyub',
    'query.affiliation': 'Maryland',
    select: ['published', 'title','author', 'abstract', 'score', 'URL', 'type'].join(','),
    sort: 'published',
    order: 'desc',
    rows: '100',
    ...paramsOverride
  });
  const resp = await fetch(new URL('/works?' + params, 'https://api.crossref.org'), {});
  if (resp.ok && resp.status === 200){
    const j = await resp.json();
    const filteredPubs = j.message.items?.filter(
      (p:any) => p.score > 20 && (p.type==='journal-article' || p.type==='proceedings-article')
    ).sort((p:any) => p.published['date-parts'][0][0]);
    return filteredPubs.map((p : any) => {
      if (p.abstract){
        const absObj = (new DOMParser()).parseFromString(`<xml>${p.abstract}</xml>`, 'application/xml');
        const absEls = absObj.getElementsByTagName('jats:p');
        p.abstractText = absEls[0]?.textContent?.replace(/(<([^>]+)>)/gi, "") || '';
      }
      p.authorStr = p.author.map((a:any) => `${a?.given} ${a?.family}`).join(', ');
      
      const pParts = p.published['date-parts'][0];
      p.publishedStr = `${(pParts[2])? pParts[2]+'/':''}${pParts[1]}/${pParts[0]}`;
      return p;
    });
  }
  
}


export default function PapersPage() {
  const [papers, setPapers] = React.useState(Array<any>);
  const [loading, setLoading] = React.useState(true);
  const PAPERS_PER_PAGE = 6;
  const [showAddtlArticles, setShowAddtlArticles] = React.useState(0);
  React.useEffect(() => {
    loadPapers().then(resp => {
      setPapers(resp);
      setLoading(false);
    });
  }, []);

  return (
        <Stack spacing={2}>
          <Typography component="h3" variant="h3" color="text.primary" sx={{pb: 2}}>
            Journal Articles & Conference Papers
          </Typography>
          <Divider/>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {(loading)?<CircularProgress />:''}
            </Grid>
            {papers.slice(0, (showAddtlArticles + 1) * PAPERS_PER_PAGE).map((paper, index) =>
               <Grid item xs={6} sm={4} md={3} key={index} sx={{ display: 'flex' }}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    flexGrow: 1
                  }}
                >
                <CardHeader
                  titleTypographyProps={{variant: 'h6'}}
                  title={paper.title}
                  subheader={paper.authorStr}
                />
                  <Stack>
                    <CardContent>
                      <Typography variant="body2">
                        Published {paper.publishedStr}
                      </Typography>
                    </CardContent>
                  {(paper.abstractText)?<CardContent>
                    <Typography variant="caption" sx={{pt: 2}}>
                      {(paper.abstractText?.length) > 250 ? paper.abstractText.substring(0,250) + '...' : paper.abstractText}
                      {/* {paper.author?.map((a:any) => (a)?<li>{a.given}  {a.family} {a.affiliation[0]?.name}</li>:'')} */}
                      {/* <p>{paper.score}</p> */}
                      {/* {paper.type} */}
                      {/* <p>{JSON.stringify(paper.published['date-parts'][0])}</p> */}
                    </Typography>
                  </CardContent>:''}
                  <CardActions>
                    <Button component={RouterLink} to={paper.URL} sx={{textDecoration:'none'}}>View Publication</Button>
                  </CardActions>
                  </Stack>
                    {/* <img
                      src={logos[index]}
                      alt={`Logo ${index + 1}`}
                      style={logoStyle}
                    /> */}
                </Card>
              </Grid>)}
            <Grid item xs={12} textAlign='center'>
              {(papers.length >= ((showAddtlArticles + 1) * PAPERS_PER_PAGE))?<Button onClick={() => setShowAddtlArticles(showAddtlArticles + 1)} startIcon={<ExpandMoreIcon/>}> Show more publications</Button>:''}
              {(showAddtlArticles > 0)?<Button onClick={() => setShowAddtlArticles(0)} startIcon={<ExpandLessIcon/>}> Hide</Button>:''}
              
            </Grid>
          </Grid>
          <Button href='archive-page' startIcon={<Archive/>}>Archived Papers</Button>
        </Stack>
  );
}
