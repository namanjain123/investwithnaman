import "./single.css";
import Sidebar from "../../components/sidebar/Sidebar";
import TopBar from "../../components/topbar/TopBar";
import SinglePost from "../../components/singlePost/SinglePost";
import React from 'react'

export default function single() {
  return (
    <div className="single">
        <Sidebar/>
        <TopBar/>
        <SinglePost/>
    </div>
  )
}
