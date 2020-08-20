import React from "react";
import dia from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let zaza = "/dialog/" + props.id;
    return (
        <div className={dia.dialog + " " + dia.active}>
            <NavLink to={zaza}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem;