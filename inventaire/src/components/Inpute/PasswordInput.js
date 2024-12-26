import React from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function PasswordInput() {
  const [error, setError] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');

  return (
    <FormControl>
      <FormLabel htmlFor="password">Password</FormLabel>
      <TextField
        id="password"
        type="password"
        placeholder="••••••"
        error={error}
        helperText={errorMessage}
        fullWidth
        required
      />
    </FormControl>
  );
}
