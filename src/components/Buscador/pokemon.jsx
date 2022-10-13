import React from "react";
import { Link } from "react-router-dom";
import { addZero, toPascalCase } from "../../helpers/helper";

const Pokemon = (props) =>{
 

//    const toPascalCase = str => (str.match(/[a-zA-Z0-9]+/g) || []).map(w => `${w.charAt(0).toUpperCase()}${w.slice(1)}`).join('');

    return(
        <>     
            <Link to={`/${props.number}`} className={"pokemon-item " + props.type[0]}> 
                <div className="pokemon-art">
                    <div className="id">
                            <span>#{addZero(props.number, 3)}</span>    
                    </div>
                    <img src={props.img} alt="img-pokemon"/>
                </div>
                <div className={"pokemon-name " + props.type[0]}>
                    <span className="text-white">{toPascalCase(props.name)}</span>
                </div>
            </Link>
  
    </>

    )
}

export default Pokemon;