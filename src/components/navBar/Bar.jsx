import React from 'react';
import "./bar.css";
import SelectAllTwoToneIcon from '@material-ui/icons/SelectAllTwoTone';
import { useDispatch, useSelector } from "react-redux";
import pager from "../../redux/actions/pager"; 
import { motion } from "framer-motion";

export default function Bar() {
    const dispatch=useDispatch();
    const handlePager=(pl)=>{
        return ()=>{
            dispatch(pager(pl));
        };
    };
    const currentPage=useSelector(state=>state.pager);
    const on=(page)=>page===currentPage;
    return (
        <div className="nav-bar">
            <div className="dots">
                <div className="dot" onClick={handlePager("About Me")}>{on("About Me") && <SelectAllTwoToneIcon/>}</div>
                <div className="dot" onClick={handlePager("Skills")}>{on("Skills") && <SelectAllTwoToneIcon/>}</div>
                <div className="dot" onClick={handlePager("Projects")}>{on("Projects") && <SelectAllTwoToneIcon/>}</div>
                <div className="dot" onClick={handlePager("Startups")}>{on("Startups") && <SelectAllTwoToneIcon/>}</div>
                <div className="dot" onClick={handlePager("Open Source")}>{on("Open Source") && <SelectAllTwoToneIcon/>}</div>
            </div>
            <motion.h3 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 2}}
            className="current-page">{currentPage}</motion.h3>
        </div>
    );
}
