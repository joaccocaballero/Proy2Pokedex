import React from "react";

const ProgressBar = (props) => {
    return(
        <>
            <div className="flex-evenly div-progress-bar">
                <span>{props.value}</span>
                <div className="grey-bar">
                    <div className={props.type} style={{width: props.value+"%", height:"10px" , border:"none", borderRadius:"5px"}}></div> 
                </div>
                      
            </div>
        </>
    )
}


export default ProgressBar