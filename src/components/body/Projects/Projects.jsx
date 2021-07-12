import React from 'react';
import Project from './Project/Project';
import "./projects.css";

//projects
import enigma from "../../../vars/others/projects/enigma";
import jotiaSpace from "../../../vars/others/projects/jotiaSpace";

export default function Projects() {
    return (
        <div className="projects">
            <Project project={enigma} />
            <Project project={jotiaSpace} />
        </div>
    )
}
