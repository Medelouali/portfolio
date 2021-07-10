import React from 'react';
import "./skill.css";
import SubSkill from './SubSkill';

export default function Skill({type, skillsList}) {
    return (
        <div className="skill">
            <div className="type">{type}</div>
            <div className="skills-list">{skillsList.map(skill=><SubSkill subSkill={skill}/>)}</div>
        </div>
    )
}
