import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from '@/components/mui';

function LoginPopup({ open, onClose }) {
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Please log in to guess</DialogTitle>
        <DialogContent>
          <Typography>
            You need to be logged in to submit your guess. Please log in or sign
            up to continue.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default LoginPopup;
