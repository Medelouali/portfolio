import React, { useState } from 'react';
import "./image.css";
// import { motion } from "framer-motion";

export default function Image({img}) {
    const [open, setOpen] = useState(false);
    const handleOpen=()=>{
        setOpen(true);
    };

    const handleClose=()=>{
        setOpen(false);
    };
    return (
        <>
            <div
                onMouseEnter={ handleOpen }
                onMouseLeave={ handleClose }
                className="img">
                <img src={img} alt="" className={"center-img"+ (open ? " on": "")} />
            </div>
        </>
    )
}
