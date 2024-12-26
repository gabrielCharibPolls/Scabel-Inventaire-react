import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
//import Divider from '@mui/material/Divider'

import { styled } from '@mui/material/styles';
import InputEmail from '../Inpute/EmailInput';
import PasswordInput from '../Inpute/PasswordInput';
import SignInButtons from '../Buttons/ButtonLogin';

const Card = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '450px',
  padding: theme.spacing(4),
  boxShadow: theme.shadows[5],
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export default function CardContainer() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card>
      <Typography variant="h4" component="h1">
        Sign In
      </Typography>
      <Box component="form" noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <InputEmail></InputEmail>
      <PasswordInput/>
      <SignInButtons/>
      </Box>
     
    </Card>
  );
}
