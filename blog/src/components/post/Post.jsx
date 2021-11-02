import React from 'react'
import "./post.css"
export default function post() {
    return (
        <div className="post">
              <img className="postImg" src="../image/dark.jpg" alt="" /> 
              <div className="postInfo"> 
              <div className="postCats">
                  <span className="postCat">Music</span>
                  <span className="postCat">Life</span>

              </div>
              <span className="postTitle">
                  Web Design and Development Expart
              </span>
              <hr />
              <span className="postDate">1 hour ago</span>
              </div>
              <p className="postDesc">
              I am a front and backend developer with 4+ years of 
              experience in creating a modern and responsive website. 
              I have advance knowledge HTML, CSS, HTML5, CSS5, PHP, 
              JavaScript and framework like React,Vue & Laravel.

              I am a front and backend developer with 4+ years of 
              experience in creating a modern and responsive website. 
              I have advance knowledge HTML, CSS, HTML5, CSS5, PHP, 
              JavaScript and framework like React,Vue & Laravel.

              I am a front and backend developer with 4+ years of 
              experience in creating a modern and responsive website. 
              I have advance knowledge HTML, CSS, HTML5, CSS5, PHP, 
              JavaScript and framework like React,Vue & Laravel.
              </p>
        </div>
    )
}
