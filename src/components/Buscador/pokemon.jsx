import React from "react";
import { Link } from "react-router-dom";

const Pokemon = (props) =>{
    return(
        <>     
            <Link to={`/${props.id}`} className={"pokemon-item " + props.type}> 
                <div className="pokemon-art">
                    <div className="id">
                            <span>#{props.id}</span>    
                    </div>
                    <img src={props.imagen} alt="img-pokemon"/>
                </div>
                <div className={"pokemon-name " + props.type}>
                    <span className="text-white">{props.name}</span>
                </div>
            </Link>
  
    </>

    )
}

export default Pokemon;