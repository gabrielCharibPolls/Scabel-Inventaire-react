

import * as React from 'react';
import TextField from '@mui/material/TextField';
import FormLabel from '@mui/material/FormLabel'; // Corrigé FromLabel en FormLabel

export default function InputEmail() {
  return (
    <div>
      <FormLabel  htmlFor="email">Email</FormLabel>
      <TextField
        id="email"
        type="email"
        name="email"
        placeholder="your@email.com"
        autoComplete="email"
        autoFocus
        required
        fullWidth
        variant="outlined"
      />
    </div>
  );
}
