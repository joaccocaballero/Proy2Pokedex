import React, {useEffect} from "react";
import Pokemon from "./pokemon";
import { useState } from "react";
import NumericIcon from "./NumericOrder";
import AlphabeticOrder from "./AlphabeticOrder";

const Buscador = (props) => {
    const [searchInput, setSearchInput] = useState("")
    const [numericOrder, setNumOrder] = useState(true)
    const [listFiltered, setListFiltered] = useState(props.list)
    
    function sortByTrash(x, y) {
        const number1 = parseInt(x.id, 10)
        const number2 = parseInt(y.id, 10)
        if (number1 < number2) {return -1;}
        if (number1 > number2) {return 1;}
        return 0;
    }

    function SortByName(x, y) {
        if (x.name < y.name) {return -1;}
        if (x.name > y.name) {return 1;}
        return 0;
    }

    useEffect(() => {
        const filtered = numericOrder ? listFiltered.sort(sortByTrash) : listFiltered.sort(SortByName)
        setListFiltered(filtered)
        console.log(listFiltered)
    }, [numericOrder])
  
    useEffect(()=>{
        setListFiltered(filteredPokemons(props.list))
    },[searchInput,props.list])

    const filteredPokemons = (pokemonsList) => {
        return pokemonsList.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))
    } 

    return (
        <>
            <div className="search-container">
                <header className="header-search">
                    <div className="logo-container">
                        <img className="img-logo" src="./images/Pokeball.png" alt="" />
                        <h1> Pokedex </h1>
                    </div>
                    <div className="header-actions" onClick={() => setNumOrder(!numericOrder)} >
                        {
                            numericOrder ? <AlphabeticOrder /> : <NumericIcon />
                        }
                        <svg className="icono-flecha" xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="none" viewBox="0 0 10 16">
                            <path fill="#212121" d="m9.017 11.108-.252-.252a.429.429 0 0 0-.606 0l-2.98 2.997V.43A.429.429 0 0 0 4.75 0h-.357a.429.429 0 0 0-.429.429v13.424l-2.98-2.997a.429.429 0 0 0-.606 0l-.252.252a.429.429 0 0 0 0 .606l4.142 4.16a.429.429 0 0 0 .607 0l4.142-4.16a.429.429 0 0 0 0-.606Z" />
                        </svg>
                    </div>
                </header>
                <input value={searchInput} className="searcher" type="text" placeholder="Buscar" onChange={(e)=>setSearchInput(e.target.value)}/>
                <div className="pokemons-container">              
                    {
                        listFiltered.map((item, key) => {
                                return (
                                    <Pokemon 
                                        name={item.name}
                                        type={item.type}
                                        number={item.id}
                                        img={item.img}
                                        key={key}
                                    />
                                )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Buscador;