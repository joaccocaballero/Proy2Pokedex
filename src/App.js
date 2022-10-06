
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
//import {BrowserRouter, Routes, Route} from "react-router-dom";
//import Buscador from './components/Buscador/buscador';
import Card from './components/pokeCard';


function App() {
  const [pokemonsList, setPokemonsList] = useState([]) 
  const [searchInput, setSearchInput] = useState("")
  const [numericOrder, setNumOrder] = useState(false)


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


  return (
    <>
    <Card/>  
      
      {/*<Buscador 
        list={pokemonsList} 
        search={setSearchInput} 
        searchValue={searchInput} 
        filteredList={filteredPokemons} 
        iconOrder={numericOrder} 
        changeOrder={setNumOrder}/> 
      */}
    </>
    );
}

export default App;
