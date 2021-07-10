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
                        <span className="first-letter">L</span>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <div className="deco"><AcUnitIcon/><AcUnitIcon/><AcUnitIcon/></div>
                </div>
            </section>
    )
}
