
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
//import {BrowserRouter, Routes, Route} from "react-router-dom";
import Buscador from './components/Buscador/buscador';



function App() {
  const [pokemonsList, setPokemonsList] = useState([]) 
  const [searchInput, setSearchInput] = useState("")


  const getPokemons = () => {
    fetch("http://localhost:4000/pokemons")
      .then(response => response.json())
      .then(data => {
        setPokemonsList(data)
      })
  }

  const filteredPokemons = (pokemonsList, searchInput) => {
    return pokemonsList.filter((item) => item.name === searchInput)
  }

  useEffect(()=>{
    getPokemons()
  },[pokemonsList])


  return (
    <>
      <Buscador list={pokemonsList} search={setSearchInput} searchValue={searchInput} filteredList={filteredPokemons}/> 
    </>
  );
}

export default App;
