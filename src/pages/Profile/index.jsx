import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
// import { useUserContext } from "../../UserContext";
import "./index.css";

const Profile = () => {
  // const { user } = useUserContext()

  return (
    // user && (
    /* <p>{user.email}</p> */
    // );
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
      }}
    >
      <Container maxWidth="sm">
        <form>
          <Box sx={{ my: 3 }}>
            <Typography color="textPrimary" variant="h4">
              Profil
            </Typography>
            <Typography color="textSecondary" gutterBottom variant="body2">
              <h5>Éditez votre Profil</h5>
            </Typography>
          </Box>
          <TextField
            fullWidth
            label="Prénom"
            margin="normal"
            name="firstName"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Email"
            margin="normal"
            name="email"
            type="email"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Mot de Passe"
            margin="normal"
            name="password"
            type="password"
            variant="outlined"
          />
          <div className="save">
            <Box sx={{ py: 2 }}>
              <Button
                className="btn-register"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sauvegarder
              </Button>
            </Box>
          </div>
        </form>
      </Container>
    </Box>
  );
};

export default Profile;
