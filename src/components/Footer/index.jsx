// import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';
import React from "react";
import "./index.css";

export default function Footer() {
  return (
      // <div className='Footer'>
      // <Box
      //   px={{ xs: 3, sm: 10 }}
      //   py={{ xs: 5, sm: 10 }}
      // >
      //   <Container maxWidth="lg">
      //     <Box textAlign="center" color="black" height={2} pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
      //       <h4>Trotti'NET &reg; {new Date().getFullYear()}</h4>
      //     </Box>
      //   </Container>
      // </Box>
      // </div>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
               <a target="_blank" rel="noreferrer" href="https://www.facebook.com">
                 <h4><i className='fab fa-facebook-f'></i></h4> 
              </a>
            </div>
            <div className="col">
              <h4>Trotti'NET &reg; {new Date().getFullYear()}</h4>
            </div>
            <div className="col">
              <a target="_blank" rel="noreferrer" href="https://github.com/jordan-creyelman/trotinette">
                <h4><i class="fa-brands fa-github"></i></h4>
              </a>
            </div>  
          </div>
        </div>
      </div>
  );
}
