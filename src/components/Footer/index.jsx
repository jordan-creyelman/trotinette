import React from "react";
import "./index.css";
import { FaGithub, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
               <a target="_blank" rel="noreferrer" href="https://www.facebook.com/TrottiNet-107788118540054">
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
