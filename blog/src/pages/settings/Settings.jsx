import React from 'react'
import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'
export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingPP">
                        <img className="" src="../image/imgAnik.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Anik"></input>
                    <label>Email</label>
                    <input type="email" placeholder="anik@gmail.com"></input>
                    <label>Password</label>
                    <input type="password"></input>
                    <button className="settingsSubmit">Update</button>

                </form>
            </div>
            <Sidebar />
        </div>
    )
}
