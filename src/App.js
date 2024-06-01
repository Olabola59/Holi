import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Post from './components/Post';
import { Container, Grid, Box } from '@mui/material';
import './styles.css';

const initialPosts = [
  { id: 1, user: 'John Doe', content: 'This is my first post!', likes: 0, comments: [] },
  { id: 2, user: 'Jane Smith', content: 'Hello, world!', likes: 0, comments: [] },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const handleLike = (id) => {
    setPosts(posts.map(post => post.id === id ? { ...post, likes: post.likes + 1 } : post));
  };

  const handleAddComment = (id, comment) => {
    setPosts(posts.map(post => post.id === id ? { ...post, comments: [...post.comments, comment] } : post));
  };

  return (
    <div className="App">
      <Navbar />
      <Container>
        <Box mt={4}>
          <Grid container spacing={2}>
            {posts.map((post) => (
              <Grid item xs={12} md={20} key={post.id}>
                <Post post={post} onLike={handleLike} onAddComment={handleAddComment} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default App;
