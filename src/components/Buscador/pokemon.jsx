import React from "react";
import { Link } from "react-router-dom";

const Pokemon = (props) =>{
    return(
        <>     
        <Link to={`/${props.id}`}>  Ver Pokemon </Link>
            <div className={"pokemon-item " + props.type}>
                <div className="pokemon-art">
                    <div className="id">
                            <span>#{props.id}</span>    
                    </div>
                    <img src={props.imagen}/>
                </div>
                <div className={"pokemon-name " + props.type}>
                    <span className="text-white">{props.name}</span>
                </div>
            </div>
         
  
    </>

    )
}

export default Pokemon;