import * as React from 'react';
import Button from '@mui/material/Button';

export default function ButtonLogin() {
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={{
        backgroundColor: 'black', 
        color: 'white', 
        '&:hover': {
          backgroundColor: '#333', 
        },
      }}
    >
      Sign in
    </Button>
  );
}
