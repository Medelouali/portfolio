import React from 'react';
import "./bar.css";
import SelectAllTwoToneIcon from '@material-ui/icons/SelectAllTwoTone';
import { useDispatch, useSelector } from "react-redux";
import pager from "../../redux/actions/pager"; 

export default function Bar() {
    const dispatch=useDispatch();
    const handlePager=(pl)=>{
        return ()=>{
            dispatch(pager(pl));
        };
    };
    const currentPage=useSelector(state=>state.pager);

    return (
        <div className="nav-bar">
            <div className="dots">
                <div className="dot" onClick={handlePager("About Me")}><SelectAllTwoToneIcon/></div>
                <div className="dot" onClick={handlePager("Skills")}><SelectAllTwoToneIcon/></div>
                <div className="dot" onClick={handlePager("Projects")}><SelectAllTwoToneIcon/></div>
                <div className="dot" onClick={handlePager("Startups")}><SelectAllTwoToneIcon/></div>
                <div className="dot" onClick={handlePager("Open Source")}><SelectAllTwoToneIcon/></div>
            </div>
            <h2 className="current-page">{currentPage}</h2>
        </div>
    );
}
