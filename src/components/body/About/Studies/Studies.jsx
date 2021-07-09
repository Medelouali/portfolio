import React from 'react';
import "./studies.css";
import ensa from '../../../../statics/pics/others/ensa.jpg';

export default function Studies() {
    return (
        <section className="studies">
            <div className="logo">
                <div className="empty"></div>
                <div className="outer-ensa">
                    <div className="ensa"><img src={ensa} alt="" /></div>
                </div>
            </div>
            <div className="statement">
                <h2>
                    I'm Currently A Computer Science Student In The National School Of 
                    Applied Sciences Of Marrakesh(ENSA).
                </h2>
            </div>
        </section>
    )
}
