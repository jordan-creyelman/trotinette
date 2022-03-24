// import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';
import React from "react";
import "./index.css";
import { FaGithub, FaFacebook } from "react-icons/fa";


export default function Footer() {
  return (
//      homepage
//       <footer>
//       <Box
//         px={{ xs: 3, sm: 10 }}
//         py={{ xs: 5, sm: 10 }}
//       >
//         <Container maxWidth="lg">
//           <Box textAlign="center" color="black" height={2} pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
//             <h4>Trotti'NET &reg; {new Date().getFullYear()}</h4>
//           </Box>
//         </Container>
//       </Box>
//       </footer>

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
                 <h4><FaFacebook className="icon-footer"/></h4> 
              </a>
            </div>
            <div className="col">
              <h4>Trotti'NET &reg; {new Date().getFullYear()}</h4>
            </div>
            <div className="col">
              <a target="_blank" rel="noreferrer" href="https://github.com/jordan-creyelman/trotinette">
                <h4><FaGithub className="icon-footer"/></h4>
              </a>
            </div>  
          </div>
        </div>
      </div>
  );
}
