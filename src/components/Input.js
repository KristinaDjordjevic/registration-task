import React, { useState } from "react";
import { ReactComponent as ClosedEye} from  '../assets/ico-eye-closed.svg';
import { ReactComponent as OpenEye } from '../assets/ico-eye.svg';

function Input(props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <label>{props.label}</label>
            <input type={(props.password && !open) ? 'password' : 'text'} value={props.value} onChange={(e)=>{props.onChange(e.target.value)}}/>

            {/* if input is password */}
            {props.password && 
                <>
                    {!open ?
                        <ClosedEye onClick={()=>{setOpen(true)}}/>
                        :
                        <OpenEye onClick={()=>{setOpen(false)}}/>  
                    }
                </>
            }
        </>                                   
    );
}

export default Input;
