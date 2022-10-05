import React from "react";

const Pokemon = (props) =>{
    return(
        <>        
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