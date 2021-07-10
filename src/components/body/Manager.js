import React from 'react'
import About from "./About/About";
import Skills from "./Skills/Skills";
import Projects from './Projects/Projects';

export default function Manager({page}) {
    switch(page){
        case "About Me":
            return <About/>;
        case "Skills":
            return <Skills/>
        case "Projects":
            return <Projects/>
        default:
            return "Unkown";
    }
}


