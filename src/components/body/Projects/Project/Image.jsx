import React from 'react';
import "./image.css";

export default function Image({img}) {
    return (
        <div className="img">
            <img src={img} alt="" className="center-img" />
        </div>
    )
}
