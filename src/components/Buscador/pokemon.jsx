import React from "react";

const Pokemon = (props) =>{
    return(
        <>        
        <div className={"pokemon-item " + props.type}>
            <div className="pokemon-art">
                <span className="id">{props.id}</span>
                <img src={props.imagen}/>
            </div>
            <div className={"pokemon-name " + props.type}>
                <p className="text-white">{props.name}</p>
            </div>
        </div>
    </>

    )
}

export default Pokemon;