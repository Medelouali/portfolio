import React from 'react';
import profile from "../../../../statics/pics/others/profilePic.jpg";
import { motion } from "framer-motion";
import "./intro.css";
import AcUnitIcon from '@material-ui/icons/AcUnit';

export default function Intro() {
    return (
        <section className="intro-page">
                <div className="pic-title">
                    <div className="outer-profile">
                        <motion.div className="profile"
                             initial={{opacity: 0}}
                             animate={{opacity: 1}}
                             transition={{duration: 0.5}}
                        ><img src={profile} alt="" /></motion.div>
                    </div>
                    <motion.h2 className="title"
                        initial={{opacity: 0, x: "100vw"}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 1, delay: 0.3, type: 'spring', stiffness: 800}}
                    >Hi! I am El Ouali, front-end developper based in Marrakesh, Morocco.</motion.h2>
                </div>
                <div className="intro">
                    <p className="intro-text">
                        <span className="first-letter">M</span>y expertise is in the area of responsive user-centric web design. With every line of code, I strive to make the web a beautiful place!
                    </p>
                    <div className="deco"><AcUnitIcon/><AcUnitIcon/><AcUnitIcon/></div>
                </div>
            </section>
    )
}
