import React from "react";
import Pokemon from "./pokemon";


const Buscador = (props) => {
    return (
        <>
            <div className="search-container">
                <header>
                    <div className="logo-container">
                        <img className="img-logo" src="./images/Pokeball.png" alt="" />
                        <h1> Pokedex </h1>
                    </div>
                    <div className="header-actions">
                        <span>#</span>
                        <svg className="icono-flecha" xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="none" viewBox="0 0 10 16">
                            <path fill="#212121" d="m9.017 11.108-.252-.252a.429.429 0 0 0-.606 0l-2.98 2.997V.43A.429.429 0 0 0 4.75 0h-.357a.429.429 0 0 0-.429.429v13.424l-2.98-2.997a.429.429 0 0 0-.606 0l-.252.252a.429.429 0 0 0 0 .606l4.142 4.16a.429.429 0 0 0 .607 0l4.142-4.16a.429.429 0 0 0 0-.606Z" />
                        </svg>
                    </div>
                </header>
                <input className="searcher" type="text" placeholder="Buscar" onfocus="this.placeholder = ''" />
                <div className="pokemons-container">
                    <Pokemon />
                </div>
            </div>

        </>
    )
}

export default Buscador;