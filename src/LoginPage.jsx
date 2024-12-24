import React from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

const LoginPage = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        fullWidth
        label="Email"
        type="email"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Password"
        type="password"
        margin="normal"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: 16 }}
      >
        Login
      </Button>
    </Container>
  );
};

export default LoginPage;

