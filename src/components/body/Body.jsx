import React from 'react';
import "./body.css";
import { useSelector } from "react-redux";
import Manager from "./Manager";

export default function Body() {
    const currentPage=useSelector(state=>state.pager);

    return (
        <div className="body">
            <Manager page={currentPage}/>
        </div>
    )
}
