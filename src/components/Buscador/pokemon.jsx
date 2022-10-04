import React from "react";

const Pokemon = (props) =>{
    return(
        <div className="pokemon-item">
            <div className="pokemon-art">
                <span className="id"></span>
                <img src={props.pokemon.img}/>
            </div>
            <div className="pokemon-name">
                <p>{props.pokemos.name}</p>
            </div>
        </div>
    )
}

export default Pokemon;