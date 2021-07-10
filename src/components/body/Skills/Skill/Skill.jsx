import React from 'react';
import "./skill.css";
import SubSkill from './SubSkill';

export default function Skill({type, skillsList}) {
    return (
        <div className="skill">
            <h4 className="type">{type}</h4>
            <div className="skills-list">{skillsList.map(skill=><SubSkill subSkill={skill}/>)}</div>
        </div>
    )
}
