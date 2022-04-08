import React from "react";

function Checkbox(props) {
    return (
        <>
            <input type='checkbox' value={props.value} onChange={(e)=>{props.onChange(e.target.checked)}}/>
            <label>{props.label}</label>
        </>                                   
    );
}

export default Checkbox;
