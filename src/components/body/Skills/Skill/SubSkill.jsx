import React from 'react';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import "./skill.css";
import { motion } from "framer-motion";

export default function SubSkill({subSkill}) {
    return (
        <motion.div 
            whileHover={{x: "3px"}} className="list">
            <div className="arrow"><ArrowRightIcon/></div>
            <div className="point">{subSkill}</div>            
        </motion.div>
    )
}
