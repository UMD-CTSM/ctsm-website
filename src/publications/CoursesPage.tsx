import { Card, CardActionArea, CardHeader, Divider, Stack, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

import courseList from "./CourseList";
import CourseModel from "./CourseModel";

export const CourseCard = ({course:c} : {course : CourseModel}) => <Card>
  <CardActionArea href={`https://academiccatalog.umd.edu/search/?P=${c.id.split(' ').join('')}`}>
    <CardHeader avatar={c.id} title={c.name} about="Test"/>
  </CardActionArea>
</Card>;

export default function CoursesPage() {
  return <Stack spacing={2}>
    <Typography component="h3" variant="h3" color="text.primary" sx={{pb: 2}}>
      Courses
    </Typography>
    <Divider/>

    <Grid container spacing={2}>
      {courseList.map(c => <Grid xs={12} sm={4}>
        <CourseCard course={c}/>
      </Grid>)}
    </Grid>
  </Stack>
}