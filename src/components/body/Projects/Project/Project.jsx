import React from 'react';
import Image from './Image';
import "./project.css";

export default function Project({project}) {
    return (
        <div className="project">
            <h4 className="project-title">
                <a href={project.link} className="link-to">{project.title}</a>
            </h4>
            <div className="images">{project.images.map(img=>(<Image img={img} />))}</div>
            <div className="project-description">{project.description}</div>
            <div className="project-link">
                <a href={project.link} className="link-to">{project.link}</a>
            </div>
        </div>
    )
}
