import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import "./index.css";

export default function Footer() {
  return (
      <div className='Footer'>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid item xs={12} sm={4}>
              <Box>
                <Link href="/contact">
                  <h3>Contact</h3>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <Link href="/inscription">
                  <h3>Inscription</h3>
                </Link>
              </Box>
              <Box>
                <Link href="/connexion">
                  <h3>Se Connecter</h3>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box>
                <Link href="/a_propos">
                  <h3>À Propos</h3>
                </Link>
              </Box>
            </Grid>
          </Grid>
          <Box textAlign="center" color="black" height={2} pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            <h3>Trotti'NET &reg; {new Date().getFullYear()}</h3>
          </Box>
        </Container>
      </Box>
      </div>
  );
}