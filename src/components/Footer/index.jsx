import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import "./index.css";

export default function Footer() {
  return (
      <div className='Footer'>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center" color="black" height={2} pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            <h4>Trotti'NET &reg; {new Date().getFullYear()}</h4>
          </Box>
        </Container>
      </Box>
      </div>
  );
}
