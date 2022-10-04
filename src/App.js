import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
//import {BrowserRouter, Routes, Route} from "react-router-dom";
import Buscador from './components/Buscador/buscador';


function App() {
  const [pokemonsList, setPokemonsList] = useState([]) 

  useEffect(){}

  
  return (
    <>
         <Buscador/> 

    
    </>
  );
}

export default App;
