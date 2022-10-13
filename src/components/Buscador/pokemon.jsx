import React from "react";
import { Link } from "react-router-dom";

const Pokemon = (props) =>{
    return(
        <>     
            <Link to={`/${props.number}`} className={"pokemon-item " + props.type[0]}> 
                <div className="pokemon-art">
                    <div className="id">
                            <span>#{props.number}</span>    
                    </div>
                    <img src={props.img} alt="img-pokemon"/>
                </div>
                <div className={"pokemon-name " + props.type[0]}>
                    <span className="text-white">{props.name}</span>
                </div>
            </Link>
  
    </>

    )
}

export default Pokemon;