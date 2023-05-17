import React from 'react';
import './projectcard.css';
import Post from "./project"
import logo1 from "../../assets/Logos_Company/AsianPaints/color.png"
export default function projectcards() {
  const postCardData = [
    { img:"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", title:"Asianpaints" , desc:"Analysis of asian paints"},
    { img:"https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500", title:"Asianpaints" , desc:"Analysis of asian paints"},
    { img:{logo1}, title:"Asianpaints" , desc:"Analysis of asian paints"},
  ];  
  return (
    <>
    <h2>Posts</h2>
    <hr/>
    <div className="posts">
      
      <br/>
      {postCardData.map((postCard) => (
        <Post
          img={postCard.img}
          title={postCard.title}
          desc={postCard.desc}
        />
      ))}
    <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" title="Asianpaints" desc="Analysis of asian paints"/>
    <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" name="hi"/>
    <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
    </div>
    </>
  )
}
