
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Buscador from './components/Buscador/buscador.jsx'
import Card from './components/PokemonCard/Card';


function App() {
  const [pokemonsList, setPokemonsList] = useState([]) 

  const getPokemons = () => {
    fetch("http://localhost:4000/pokemons")
      .then(response => response.json())
      .then(data => {
        setPokemonsList(data)
      })
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
          />}  
      
        />  
      <Route path="/:pokemonID" element={<Card list={pokemonsList}/>} />
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
