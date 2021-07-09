import React from 'react';
import "./passions.css";
import passions from '../../../../vars/passions/passion.js';
import Card from './Card';

export default function Passions() {
    return (
        <section className="passions"> 
            <h3 className="group-title">Passions</h3>
            <div className="passions-group">
                {passions.map(passion=>(
                    <Card logo={passion.logo} passion={passion.passion} text={passion.text}/>
                ))}
            </div>
        </section>  
    );
}

// Problems Solving - Design - Music - Writing - Hacking.
