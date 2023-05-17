import React from 'react';
import "./header.css"
import Fade from "react-awesome-reveal";
export default function header() {
  return (
    <div className="header">
        <div className='headerTitles'>
            <span className='headerTitleLg'>Invest With Naman</span>
            <span className='headerTitleSm'>A one stop website to get stock analysis and my current portfolio</span>
        </div>
            <img
            className="headerImg"
            src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""/>
    </div>
  )
}
