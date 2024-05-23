import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import archivedPaperList from './ArchivedPaperList';
import { FormControlLabel, Link, ListItemText, Switch, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Container } from '@mui/system';

type archivedPaperType = {
  name: string, filename?: string
}
const initialLocalList : archivedPaperType[] = archivedPaperList.map(l=>{
  let filename = undefined;
  if (l.endsWith('View')){
    const alphaL = l.replace(/[^a-z0-9]/gi, '');
    filename = alphaL.slice(0,15) + alphaL.slice(-10, -5);
    filename = filename.toLowerCase();
    l = l.slice(0, l.length - 4).trimEnd();
  }
  return {
    name: l,
    filename
  }
  
});

export default function ArchivedPapers(){
  const [searchStr, setSearchStr] = useState<string>('');
  const [hasFile, setHasFile] = useState(true);
  const [localArchivedPaperList, setLocalArchivedPaperList] = useState<archivedPaperType[]>(initialLocalList);
  
  useEffect(() => {
    setLocalArchivedPaperList(initialLocalList.filter( p => p.name.replace(/[^a-z0-9]/gi, '').toLowerCase().includes(searchStr.replace(/[^a-z0-9]/gi, '').toLowerCase()) && ( !hasFile || p.filename)));
  }, [searchStr, localArchivedPaperList, hasFile]);

  return <Container>
    <Typography variant='h1'>Archive</Typography>
    <TextField label="Search" fullWidth variant='outlined' onChange={e=>setSearchStr(e.target.value)} value={searchStr} />
    <FormControlLabel control={<Switch checked={hasFile} onChange={e => setHasFile(e.target.checked)}/>} label="Has File Attached"/>
    <List>
    {localArchivedPaperList.map(l => <ListItem>
      <ListItemText
                    primary={l.name}
                    secondary={<Link href={`/archive/${l.filename}.pdf`}>{l.filename}.pdf</Link>}
                  /></ListItem>)}
  </List>
  </Container>
}