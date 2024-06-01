import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const CommentSection = ({ comments }) => {
  return (
    <List>
      {comments.map((comment, index) => (
        <ListItem key={index}>
          <ListItemText primary={comment} />
        </ListItem>
      ))}
    </List>
  );
};

export default CommentSection;
