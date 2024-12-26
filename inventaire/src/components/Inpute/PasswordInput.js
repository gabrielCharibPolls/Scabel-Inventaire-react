import * as React from "react";
import TextField from "@mui/material/TextField";
import FormLabel from "@mui/material/FormLabel";

export default function PasswordInput({ value, onChange }) {
  return (
    <div>
      <FormLabel htmlFor="password">Password</FormLabel>
      <TextField
        id="password"
        type="password"
        name="password"
        placeholder="Enter your password"
        value={value}
        onChange={onChange}
        required
        fullWidth
        variant="outlined"
      />
    </div>
  );
}
