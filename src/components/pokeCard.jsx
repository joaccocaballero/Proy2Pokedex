import React from "react";

const Card = () => {
    return (
        <>
            <div className="contenedor-card">

                <header className="flex"> 
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="#212121" d="m12.23 20.512.774-.774a.469.469 0 0 0 0-.663l-6.06-6.06h13.337c.26 0 .469-.21.469-.468v-1.094a.469.469 0 0 0-.469-.469H6.944l6.06-6.06a.469.469 0 0 0 0-.662l-.774-.774a.469.469 0 0 0-.662 0l-8.18 8.18a.469.469 0 0 0 0 .664l8.18 8.18c.183.183.48.183.662 0Z"/>
                    </svg>


                        <h1> Squirtle </h1>
                    </div>
                    <span> #007 </span>
                </header>

                <div className="flex-center">
                    <img src="./images/squirtle.png" alt="imagen del pokemon" />
                    <span> Water </span>
                </div>

                <div>
                    <h3>About</h3>
                    <div>
                        <div className="pokemon-weight">
                            <div>
                                <img src="" alt="" />
                                <span> 9.0 kg</span>
                            </div>
                            <span> Weight</span>
                        </div>
                        <div className="pokemon-height">
                            <div>
                                    <img src="" alt="" />
                                    <span> 0.5</span>
                                </div>
                                <span> Height </span>
                            </div>
                        <div className="pokemon-moves">
                            <div> Torrent </div>
                            <div> Rain-Dish </div>
                            <span>Moves</span>
                        </div>
                    </div>

                    <p className="pokemon-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae repellendus sunt velit odio impedit at numquam labore neque ut. Est eveniet maxime obcaecati atque deserunt molestiae cumque culpa aperiam debitis? </p>
                </div>

                <div className="pokemon-stats">
                    <div className="stats-tag">
                        <ul>
                            <li>
                                HP
                                <div>
                                    div 
                                    <div className="stats-bar"></div>
                                </div>
                            </li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default Card;