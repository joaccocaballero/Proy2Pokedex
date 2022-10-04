import React from "react";

const Pokemon = (props) =>{
    return(
        <>        
        <div className="pokemon-item">
            <div className="pokemon-art">
                <span className="id">2121</span>
                <img src="./images/squirtle.png"/>
            </div>
            <div className="pokemon-name">
                <p>Squirtle</p>
            </div>
        </div>
        <div className="pokemon-item">
            <div className="pokemon-art">
                <span className="id"></span>
                <img src="./images/squirtle.png"/>
            </div>
            <div className="pokemon-name">
                <p>Squirtle</p>
            </div>
        </div>
        <div className="pokemon-item">
            <div className="pokemon-art">
                <span className="id"></span>
                <img src="./images/squirtle.png"/>
            </div>
            <div className="pokemon-name">
                <p>Squirtle</p>
            </div>
        </div>
    </>

    )
}

export default Pokemon;