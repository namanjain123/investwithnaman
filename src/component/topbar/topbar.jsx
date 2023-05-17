import React from 'react';
import { Link } from "react-router-dom";
import "./topbar.css";
export default function topbar() {
  return (
    <div className="top">
      <div className="topLeft">
      <img
              className="topImg"
              src="https://drive.google.com/uc?export=view&id=1j9RyapaoonNuRxyYZBcksQRCP03VocH6"
              alt=""
            />
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
              HOME
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">PORTFOLIO</li>
          <li className="topListItem">ANALYSIS</li>
          <i className="topSearchIcon fas fa-search"></i>
          
        </ul>
      </div>
      <div className="topRight">
        <i className="topIcon fab fa-github"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-linkedin-in"></i>
        <i className="topIcon fab fa-twitter"></i>
      </div>
    </div>
  )
}
