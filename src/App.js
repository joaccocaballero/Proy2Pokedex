
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom"


import Buscador from './components/Buscador/buscador.jsx'
import Card from './components/PokemonCard/Card';


function App() {
  const [pokemonsList, setPokemonsList] = useState([]) 
  const [searchInput, setSearchInput] = useState("")
  const [numericOrder, setNumOrder] = useState(false)
  const [selectedPokemon, setSelectedPokemon] = useState({
    "id": 1,
    "img": "./images/bulbasaur.png",
    "name": "Bulbasaur",
    "weight": "6,9 Kg",
    "height": "0,7m",
    "moves": "Chlorophyl, overgrow",
    "description": "In battle, it flaps its wings at great speed to release highly toxic dust into the air",
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 39,
      "Attack": 52,
      "Defense": 43,
      "Spa": 60,
      "Spd": 50,
      "Speed": 65
    }
  })


  const getPokemons = () => {
    fetch("http://localhost:4000/pokemons")
      .then(response => response.json())
      .then(data => {
        setPokemonsList(data)
      })
  }

  const filteredPokemons = (pokemonsList, searchInput) => {
    return pokemonsList.filter((item) => item.name.toLowerCase().includes(searchInput.toLowerCase()))
  }

  useEffect(()=>{
    getPokemons()
  },[])

const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/" element= { 
          <Buscador
            list={pokemonsList}
            search={setSearchInput}
            searchValue={searchInput}
            filteredList={filteredPokemons}
            iconOrder={numericOrder}
            changeOrder={setNumOrder} 
          />}  
      
        />
        
      <Route path="/:pokemonID" element= {<Card list={pokemonsList} /> } />
    </Routes>

  )
}

  return (
    <>  
        <BrowserRouter> 
            <AppRoutes> </AppRoutes>
        </BrowserRouter>
      
  
      
    </>
    );
}

export default App;
