import React from 'react';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';



export default function SignInButtons() {
  return (
    <>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button type="submit" variant="contained" fullWidth  
      
      sx={{
      backgroundColor: '#000', 
      color: '#fff', 
      '&:hover': {
      backgroundColor: '#333',
    },
    }}
> 
        Sign in
      </Button>
      <Link component="button" onClick sx={{ alignSelf: 'center' }}>
        Forgot your password?
      </Link>
    </>
  );
}
