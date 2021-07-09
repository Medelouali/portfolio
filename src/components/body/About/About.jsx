import React from 'react';
import Intro from './Intro/Intro';
import Passions from './Passions/Passions';
import Studies from './Studies/Studies';
import "./about.css";

export default function About() {
    return (
        <div className="about">
            <Intro/>
            <Studies/>
            <Passions/>
        </div>
    )
}
