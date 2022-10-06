import React from "react";

const PokeType = (props)=>{
    return(
        <div>
            <span className={props.type + " pokemon-type-card"}>
                {props.type}
            </span>
        </div>
    )

}

export default PokeType;