import React from 'react';
import"./home.css";
import Header from "../../component/header/header";
import Topbar from "../../component/topbar/topbar";
import Projectcards from "../../component/projectcard/projectcards"
export default function home() {
  return (
    <div>
        <Topbar/>
        <Header/>
        <Projectcards/>
    </div>
    
  )
}
