import React from 'react';
import Intro from './Intro/Intro';
import Passions from './Passions/Passions';
import Studies from './Studies/Studies';
import "./about.css";
import { motion } from "framer-motion";

export default function About() {
    return (
        <motion.div 
        initial={{x: "100vw"}}
        animate={{x: 0}}
        transition={{duration: 0.5}}
        className="about">
            <Intro/>
            <Studies/>
            <Passions/>
        </motion.div>
    )
}
