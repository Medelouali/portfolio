import React from 'react';
import "./bar.css";
import SelectAllTwoToneIcon from '@material-ui/icons/SelectAllTwoTone';

export default function Bar() {
    return (
        <div className="nav-bar">
            <div className="dots">
                <div className="dot"><SelectAllTwoToneIcon/></div>
                <div className="dot"><SelectAllTwoToneIcon/></div>
                <div className="dot"><SelectAllTwoToneIcon/></div>
                <div className="dot"><SelectAllTwoToneIcon/></div>
                <div className="dot"><SelectAllTwoToneIcon/></div>
            </div>
            <h2 className="current-page">Current Page</h2>
        </div>
    );
}
