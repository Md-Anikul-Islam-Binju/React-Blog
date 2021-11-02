import React from 'react'
import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebarItem">
               <span className="sidebarTitle">About Me</span>

               <img className="" src="../image/imgAnik.jpg" alt="" /> 
               <p>I am a front and backend developer with 4+ years of 
                experience in creating a modern and responsive website.</p>
           </div>
           <div className="sidebarItem">
           <span className="sidebarTitle">Category</span>
           <ul className="sidebarList">
               <li className="sidebarListItem">Life</li>
               <li className="sidebarListItem">Music</li>
               <li className="sidebarListItem">Movie</li>
               <li className="sidebarListItem">Game</li>
           </ul>
           </div>
           <div className="sidebarItem">
           <span className="sidebarTitle">Follow Us</span>
           <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
           </div>
           </div>
        
        </div>
    )
}
