import React from 'react';
import Project from './Project/Project';
import "./projects.css";
import { motion } from "framer-motion";

//projects
import enigma from "../../../vars/others/projects/enigma";
import jotiaSpace from "../../../vars/others/projects/jotiaSpace";

export default function Projects() {
    return (
        <motion.div 
        initial={{x: "100vw"}}
        animate={{x: 0}}
        transition={{duration: 0.5}}
        className="projects">
            <Project project={enigma} />
            <Project project={jotiaSpace} />
        </motion.div>
    )
}
