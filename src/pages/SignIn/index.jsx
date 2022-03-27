import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { logIn } from "../../redux/userActions";
import { useNavigate } from "react-router-dom";
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import './index.css';
import $ from 'jquery';
import {animation} from "../../utils/animation";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitInfo = (event) => {
    event.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      user: {
        email: `${event.target.elements.email.value}`,
        password: `${event.target.elements.password.value}`,
      },
    });
    let requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("https://apitrottinet.herokuapp.com/login", requestOptions)
      .then((response) => {
        if (response.headers.get("Authorization")) {
          Cookies.set("token", response.headers.get("Authorization"), {
            sameSite: "lax",
          });
          Cookies.set("isLoggedIn", true, { sameSite: "lax" });
          dispatch(logIn(Cookies.get("token")));
          setTimeout(function(){ animation(navigate("/")); });
        } else alert("Quelque chose s'est mal passé");
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 5);
    });
  }, []);

  return (
    <>
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
          <form onSubmit={submitInfo}>
            <Box sx={{ my: 1 }}>
              <Typography color="textPrimary" variant="h4">
                Se connecter
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Email 📫"
              margin="normal"
              name="email"
              type="email"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="Mot de Passe 🔒"
              margin="normal"
              name="password"
              type="password"
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                className="btnlogin"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Se connecter
              </Button>
            </Box>            
          </form>
        </Container>
      </Box>
    </>
  );
}

export default SignIn;
