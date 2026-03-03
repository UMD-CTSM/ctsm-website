import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CircularProgress, Divider, Stack } from '@mui/material';

export const loadBlogPosts = async (limit?: number) => {
  const apiUrl = `https://technology-for-intelligent-decisions.ghost.io/ghost/api/content/posts/?key=504e7dbb1cb83bfabd492074ef${limit ? `&limit=${limit}` : ''}`;
  
  try {
    console.log('Fetching blog posts from:', apiUrl);
    const response = await fetch(apiUrl, {
      signal: AbortSignal.timeout(10000) // 10 second timeout
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Blog posts loaded:', data.posts?.length || 0);
    return data.posts || [];
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
};

export default function BlogPostsPage() {
  const [blogPosts, setBlogPosts] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    loadBlogPosts().then(posts => {
      if (posts.length === 0) {
        setError('Unable to load blog posts. Please check the console for details.');
      }
      setBlogPosts(posts);
      setLoading(false);
    }).catch(err => {
      console.error('Failed to load blog posts:', err);
      setError('Failed to load blog posts. Please try again later.');
      setLoading(false);
    });
  }, []);

  return (
    <Stack spacing={2}>
      <Typography component="h3" variant="h3" color="text.primary" sx={{ pb: 2 }}>
        Blog Posts
      </Typography>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {loading && <CircularProgress />}
          {error && !loading && (
            <Typography color="error" variant="body1">
              {error}
            </Typography>
          )}
        </Grid>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id} sx={{ display: 'flex' }}>
            <Card
              component="a"
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                textDecoration: 'none',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease-in-out'
                }
              }}
            >
              <CardContent>
                <Typography variant="h6" component="h4" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {post.excerpt || post.custom_excerpt}
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                  <Typography variant="caption" color="text.secondary">
                    {new Date(post.published_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {post.reading_time} min read
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
