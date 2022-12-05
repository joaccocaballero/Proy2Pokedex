import React from "react";
import { toPascalCase } from "../../functions/helper";

const PokeType = (props)=>{
    return(
            <div className={props.type + " pokemon-type-card flex-center-row"}>
                {toPascalCase(props.type)}
            </div>
    )
}

export default PokeType;