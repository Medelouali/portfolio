import React from 'react';
import { soft, technical } from '../../../vars/others/skills/skills';
import Skill from './Skill/Skill';
import "./skills.css";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <motion.div 
        initial={{x: "100vw"}}
        animate={{x: 0}}
        transition={{duration: 0.5}}
        className="skills">
            <Skill type="Technical" skillsList={ technical }/>
            <Skill type="Soft" skillsList={ soft }/>
        </motion.div>
    )
}
