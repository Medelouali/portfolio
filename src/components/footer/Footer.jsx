import React, { useState } from 'react';
import "./footer.css";
import { motion } from "framer-motion";
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';

import Core from "./Core";

export default function Footer() {
    const [open, setOpen] = useState(false);
    const handleFooter=()=>{
        setOpen(!open);
    };

    return (
        <div className="footer">
           {
                open ?
                <motion.div 
                initial={{y: "100vh", width: "100%"}}
                animate={{y: 0, width: "100%"}}
                transition={{duration: 0.5}}
                className="content">
                    <div onClick={handleFooter} className="icon"><CloseRoundedIcon/></div>
                    <Core/>    
                </motion.div>: <div onClick={handleFooter} className="click-me"><ExpandLessRoundedIcon/></div>
           }
        </div>
    )
}
