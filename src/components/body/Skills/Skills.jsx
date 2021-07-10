import React from 'react';
import { soft, technical } from '../../../vars/others/skills/skills';
import Skill from './Skill/Skill';
import "./skills.css";

export default function Skills() {
    return (
        <div className="skills">
            <Skill type="Technical" skillsList={ technical }/>
            <Skill type="Soft" skillsList={ soft }/>
        </div>
    )
}
