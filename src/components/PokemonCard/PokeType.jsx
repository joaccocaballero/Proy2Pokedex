import React from "react";

const PokeType = (props)=>{
    return(
        <div>
            <div className={props.type + " pokemon-type-card flex-center-row"}>
                {props.type}
            </div>
        </div>
    )

}

export default PokeType;