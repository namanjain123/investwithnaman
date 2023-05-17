import React from 'react'
import './project.css'
import { Link } from "react-router-dom";
export default function project({title,desc,img,tag1,tag2}) {
  return (
    <div className='post'>
      <img
        className="postImg"
        src={img}
        alt="Company"
      />
      <div className="postCats">
          <span className="postCat">
              Music
          </span>
          <span className="postCat">
              Life
          </span>
      </div>
      <div className='postInfo'>
        <span className='postTitle'>{title}</span>
        <hr />
      
      <p className='postDesc'>{desc}</p>
      </div>
    </div>
  )
}
