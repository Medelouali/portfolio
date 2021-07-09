import React from 'react';
import "./passions.css";

export default function Card({logo, passion, text}) {
    return (
        <div className="card">
            <div className="logo"><img className="center-logo" src={logo} alt="Alt" /></div>
            <h4 className="passion">{passion}</h4>
            <div className="text">{text}</div>
        </div>
    );
}
