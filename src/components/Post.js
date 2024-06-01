import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, TextField, IconButton, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentSection from './CommentSection';
import { styled } from '@mui/system';

const CustomCard = styled(Card)({
  backgroundColor: '#FEF4F0',
  marginBottom: '20px',
  position: 'relative',
  overflow: 'visible',
  '&:hover .DonateButton': {
    display: 'block',
  },
});

const LikeButton = styled(IconButton)({
  color: '#F05222',
});

const DonateButton = styled(Button)({
  backgroundColor: '#F05222',
  color: '#FFFFFF',
  position: 'absolute',
  top: '10px',
  right: '10px',
  display: 'none',
  '&:hover': {
    backgroundColor: '#D4421B',
  },
});

const Post = ({ post, onLike, onAddComment }) => {
  const [comment, setComment] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    onAddComment(post.id, comment);
    setComment('');
  };

  const handleDonateClick = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <CustomCard>
      <CardContent>
        <Typography variant="h6">{post.user}</Typography>
        <Typography variant="body1">{post.content}</Typography>
        <Grid container alignItems="center" spacing={1}>
          <Grid item>
            <LikeButton onClick={() => onLike(post.id)}>
              <ThumbUpIcon />
            </LikeButton>
          </Grid>
          <Grid item>
            <Typography variant="body2">{post.likes} likes</Typography>
          </Grid>
        </Grid>
        <CommentSection comments={post.comments} />
        <form onSubmit={handleCommentSubmit}>
          <TextField
            label="Add a comment"
            variant="outlined"
            fullWidth
            value={comment}
            onChange={handleCommentChange}
            size="small"
            style={{ marginTop: '1px' }}
          />
          <Button type="submit" variant="contained" style={{ backgroundColor: '#F05222', marginTop: '10px' }}>
            Comment
          </Button>
        </form>
        <DonateButton className="DonateButton" onClick={handleDonateClick}>
          Donate
        </DonateButton>
      </CardContent>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Donate</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
            />
            <TextField
              margin="dense"
              label="Amount"
              type="number"
              fullWidth
              variant="outlined"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDialogClose} color="primary">
            Donate
          </Button>
        </DialogActions>
      </Dialog>
    </CustomCard>
  );
};

export default Post;
