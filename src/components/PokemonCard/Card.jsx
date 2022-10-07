import React from "react";
import ProgressBar from "./ProgressBar";
import PokeType from "./PokeType";

const Card = (props) => {
    return (
        <>
            <div className={props.selected.type[0] + " contenedor-card"} >
                <header className="header-card">                
                    <div className="flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="30" viewBox="0 0 24 24">                  
                            <path fill="#FFFFFF" d="m12.23 20.512.774-.774a.469.469 0 0 0 0-.663l-6.06-6.06h13.337c.26 0 .469-.21.469-.468v-1.094a.469.469 0 0 0-.469-.469H6.944l6.06-6.06a.469.469 0 0 0 0-.662l-.774-.774a.469.469 0 0 0-.662 0l-8.18 8.18a.469.469 0 0 0 0 .664l8.18 8.18c.183.183.48.183.662 0Z" />
                        </svg>
                        <h1>{props.selected.name}</h1>
                    </div>
                    
                    <span className="flex-row">{"#"+props.selected.id}</span>
                </header>

                <div className="flex-column pokeballBackground">
                    <div id="card-img">
                        <img className="pokeball-img" src="./images/Pokeball.png" alt="imagen pokeball" />
                        <img className="pok-card-img" src={props.selected.img} alt="imagen del pokemon" />
                    </div>    
                </div>
                

                <div className="pokemon-about">
                    <div className="flex-center-column">
                        <div className="pokemon-type-container">
                            {
                                props.selected.type.map((item, key) => {
                                    return (
                                        <PokeType key={key} type={item}/>
                                    )
                                })
                            } 
                        </div>
                        <h3>About</h3>
                    </div>                  
                    
                    <div className="pokemon-info flex-center-row flex-between">
                        <div className="pokemon-weight">
                            <div className="flex-center-row">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 16 16">
                                    <path fill="#212121" d="M14 2h-2.025C11.06.793 9.627 0 8 0 6.373 0 4.94.793 4.025 2H2C.897 2 0 2.897 0 4v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2ZM8 1a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm7 13a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h1.424A4.959 4.959 0 0 0 3 5c0 2.757 2.243 5 5 5s5-2.243 5-5a4.96 4.96 0 0 0-.424-2H14a1 1 0 0 1 1 1v10ZM8 8a1.494 1.494 0 0 0 1.014-2.598l.945-2.205a.5.5 0 1 0-.919-.394L8.095 5.01C6.987 4.938 6.5 5.895 6.5 6.5 6.5 7.327 7.173 8 8 8Zm0-2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1Z" />
                                </svg>
                                <span>{props.selected.weight}</span>
                            </div>
                            <span className="bold"> Weight</span>
                        </div>

                        <div className="pokemon-height">
                            <div className="flex-center-row">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 8 16">
                                    <path fill="#212121" d="M7 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1ZM1 15V1h6v2H5.25a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25H7v2H5.25a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25H7v2H5.25a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25H7v2H5.25a.25.25 0 0 0-.25.25v.5c0 .138.112.25.25.25H7v2H1Z" />
                                </svg>
                                <span> 0.5</span>
                            </div>
                            <span className="bold">{props.selected.height}</span>
                        </div>

                        <div className="pokemon-moves flex-center-column">
                            <p>{props.selected.moves}</p>
                            <span className="bold">Moves</span>
                        </div>

                    </div>
                    <p className="pokemon-description">{props.selected.description}</p>
                
                <div className="pokemon-stats">
                    <div className="stats-tag">
                        <ul className="flex-center-column">
                            <li>HP</li>
                            <li>ATK</li>
                            <li>DEF</li>
                            <li>SATK</li>
                            <li>SDEF</li>
                            <li>SPD</li>
                        </ul>
                    </div>
                    <div className="stats-bar">
                        <ProgressBar value={props.selected.base.HP} type={props.selected.type[0]}/>
                        <ProgressBar value={props.selected.base.Attack} type={props.selected.type[0]}/>
                        <ProgressBar value={props.selected.base.Defense} type={props.selected.type[0]}/>
                        <ProgressBar value={props.selected.base.Spa} type={props.selected.type[0]}/>
                        <ProgressBar value={props.selected.base.Spd} type={props.selected.type[0]}/>
                        <ProgressBar value={props.selected.base.Speed} type={props.selected.type[0]}/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;


