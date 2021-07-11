import React from 'react'
import Profile from './Profile/Profile'
import Socials from './Social/Socials'
import "./footer.css";

export default function Core() {
    return (
        <div className="core">
            <Profile/>
            <Socials/>
        </div>
    )
}
