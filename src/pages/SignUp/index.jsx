import React from "react"
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { logIn } from '../../redux/userActions';
import { useNavigate } from "react-router-dom";
import { Box, Button, Checkbox, Container, Link, TextField, Typography} from '@mui/material';
import "./index.css";

function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitInfo = (event) => {
    event.preventDefault();
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({
      "user": {
        "email": `${event.target.elements.email.value}`,
        "password": `${event.target.elements.password.value}`
      }
    });
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };

    fetch('http://localhost:3000/users', requestOptions)
      .then(response => {
        if (response.headers.get('Authorization'))
        {
          Cookies.set('token', response.headers.get('Authorization'), { sameSite: 'lax' });
          Cookies.set('isLoggedIn', true, { sameSite: 'lax' });
          dispatch(logIn(Cookies.get('token')));
          navigate('/')
        }
        else (alert('Something went wrong'))
      })
      .catch(error => console.log('error', error));
  }

  return (
    <>
    <div className='Register'>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <form>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Créer un nouveau compte
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Utilisez votre email pour créer un nouveau compte
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
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox className="checkbox"
                name="policy"
              />
              <Typography
                variant="body2"
              >
                J'ai lu les
                {' '}
                <Link
                  href="https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt"
                  passHref
                >
                  <Link className="link_validation"
                    underline="always"
                    variant="subtitle2"
                  >    
                  Termes et conditions
                  </Link>
                </Link>
              </Typography>
            </Box>
            <Box sx={{ py: 2 }}>
              <Button className="btn-register"
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Inscription
              </Button>
              
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Avez-vous un compte ?
              {' '}
              <Link
                href="/connexion"
              >
                <Link className="linksignup"
                  variant="subtitle2"
                  underline="hover"
                >
                  Se connecter
                </Link>
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
      </div>
    </>
  )
}

export default SignUp
