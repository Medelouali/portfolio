import React from 'react';
import "./social.css";

export default function Social({icon, link}) {
    return (
        <a href={link} className="social-icon">
            {icon}
        </a>
    )
}
