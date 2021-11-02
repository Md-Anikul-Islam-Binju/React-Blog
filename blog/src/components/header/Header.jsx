import React from 'react'
import "./header.css"

export default function Header() {
    return (
        <div className="header">

            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>

            <img className="headerImage" src="../image/nature.jpg" alt="" /> 
            
        </div>
    )
}
