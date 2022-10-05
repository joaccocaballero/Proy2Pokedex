import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
//import {BrowserRouter, Routes, Route} from "react-router-dom";
import Buscador from './components/Buscador/buscador';



function App() {
  const [pokemonsList, setPokemonsList] = useState([]) 

  const getPokemons = () => {
    fetch(" http://localhost:4000/pokemons")
      .then(response => response.json())
      .then(data => {
     
        setPokemonsList(data)
      })
  }

  useEffect(()=>{
    getPokemons()
    console.log(pokemonsList)
  },[pokemonsList])


  return (
    <>
         <Buscador list={pokemonsList}/> 
 
    
    </>
  );
}

export default App;
