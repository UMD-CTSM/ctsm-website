import React from "react";
import PapersPage from "./PapersPage";
import { Stack, Typography } from "@mui/material";
import CoursesPage from "./CoursesPage";
import BooksPage from "./BooksPage";
import BlogPostsPage from "./BlogPostsPage";

export default function PublicationPage() {
  return <Stack spacing={2}>
    <Typography component='h1' variant='h1'>Publications</Typography>
    <PapersPage/>
    <BlogPostsPage/>
    <CoursesPage/>
    <BooksPage/>
  </Stack>
}