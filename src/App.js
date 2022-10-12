
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Buscador from './components/Buscador/buscador.jsx'
import Card from './components/PokemonCard/Card';


function App() {
  const [pokemonsList, setPokemonsList] = useState([]) 
  const normalList = []

  const getPokemons = async () => {
    for (let index = 1; index < 25 ; index++){
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}/`)
      .then(response => response.json())
      normalList.push(res)
    }
    setPokemonsList(normalList)
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
