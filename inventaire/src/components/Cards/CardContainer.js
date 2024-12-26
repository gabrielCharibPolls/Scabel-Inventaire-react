import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import InputEmail from "../Inpute/EmailInput";
import PasswordInput from "../Inpute/PasswordInput";
import SignInButtons from "../Buttons/ButtonLogin";

const Card = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "450px",
  padding: theme.spacing(4),
  boxShadow: theme.shadows[5],
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export default function CardContainer() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {

      console.error("Champs requis");
      return;
    }

    fetch("http://10.2.233.105:83/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          console.log(email)
          console.log(password)
          throw new Error(`Erreur HTTP : ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Connexion réussie :", data);
        // Gestion du succès (stockage token, redirection, etc.)
      })
      .catch((error) => console.error("Erreur lors de la connexion :", error));
  };

  return (
    <Card>
      <Typography variant="h4" component="h1">
        Sign In
      </Typography>
      <Box
        component="form"
        noValidate
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        onSubmit={handleSubmit}
      >
        <InputEmail name="email" />
        <PasswordInput name="password" />
        <SignInButtons />
      </Box>
    </Card>
  );
}
