import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/system';

const logoStyle = {
  width: '64px',
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  const [papers, setPapers] = React.useState(Array<any>);

  React.useEffect(() => {

    const searchUrl = new URL('/works?' + new URLSearchParams({
      'query': 'network railroad climate resilience risk sustainability',
      'query.contributor': 'Bilal M. Ayyub',
      'query.affiliation': 'Maryland',
      'select': ['published', 'title','author', 'abstract', 'score'].join(','),
      'sort': 'created',
      'order': 'desc',
      'rows': '100',
      'filter': Object.entries({
        'type':'journal-article'
      }).map(([name,val]) => `${name}:${val}`).join(',')
    }), 'https://api.crossref.org');
    fetch(searchUrl, {
      headers: {
        'User-Agent': 'IcnCtsmWebsite (https://www.infrastructureclimate.net/;mailto:nczh@umd.edu)'
      }
    }).then(resp => {
      if (resp.ok && resp.status == 200) resp.json().then(j => {
        // 
        setPapers(j.message.items.filter((p:any) => p.score > 35).slice(0,9).map((p : any) => {
          if (p.abstract){
            const absObj = (new DOMParser()).parseFromString(`<xml>${p.abstract}</xml>`, 'application/xml');
            const absEls = absObj.getElementsByTagName('jats:p');
            // for ( let i = 0; i < absEls.length; i++) {
            //   const absEl = absEls[i];
            //   absEl.textContent
            // }
            p.abstractText = absEls[0]?.textContent?.replace(/(<([^>]+)>)/gi, "") || '';
          }
          return p;
        }))
      });
    })
    
  }, []);

  return (
    <Container
      id="publications"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
      <Typography component="h2" variant="h2" color="text.primary">
        Publications
      </Typography>
      </Box>
      <Grid container spacing={2}>
        {papers.map((paper, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  title={paper.title}
                  subheader={(() : string=> {
                    const a = paper.author?.find((a : any)=>a.sequence === 'first');
                    const pParts = paper.published['date-parts'][0];
                    return `${a?.given} ${a?.family} | Published ${(pParts[2])? pParts[2]+'/':''}${pParts[1]}/${pParts[0]}`
                  })()}
                />
                {/* <img
                  src={logos[index]}
                  alt={`Logo ${index + 1}`}
                  style={logoStyle}
                /> */}
              </Box>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {(paper.abstractText?.length) > 250 ? paper.abstractText.substring(0,250) + '...' : paper.abstractText}
                  {/* {paper.author?.map((a:any) => (a)?<li>{a.given}  {a.family} {a.affiliation[0]?.name}</li>:'')} */}
                  {/* <p>{paper.score}</p>
                  <p>{JSON.stringify(paper.published['date-parts'][0])}</p> */}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
