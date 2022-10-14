import React from "react";

const PokeType = (props)=>{
    return(
        

            <div className={props.type + " pokemon-type-card flex-center-row"}>
                {props.type}
            </div>

    )

}

export default PokeType;