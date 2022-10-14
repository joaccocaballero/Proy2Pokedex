
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Buscador from './components/Buscador/buscador.jsx'
import Card from './components/PokemonCard/Card';


function App() {
  const [pokemonsList, setPokemonsList] = useState([]) 
 
  const getPokemons = async () => {
    let promises = [];
    for (let index = 1; index < 249 ; index++){
      await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
        .then((response) => response.json())
        .then((response) => {
    
          return promises.push({
            "id": response.id,
            "img": response.sprites.other['official-artwork']['front_default'],
            "name": response.name,
            "height": response.height,
            "weight":response.weight,
            "moves": response.moves.slice(0,2).map((move)=>move.move.name),
            "type": response.types.map((type)=>type.type.name),
            "base": {
                "HP": response.stats[0]["base_stat"],
                "Attack": response.stats[1]["base_stat"],
                "Defense": response.stats[2]["base_stat"],
                "Spa": response.stats[3]["base_stat"],
                "Spd": response.stats[4]["base_stat"],
                "Speed": response.stats[5]["base_stat"]
            }
          });
        })
    }
    promises.forEach((poke)=>{
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${poke.id}`)
        .then((response) => response.json())
        .then((response) => {
          const description = response["flavor_text_entries"][0]["flavor_text"]
          poke.description = description;
    })})
    setPokemonsList(promises)
  }

  useEffect(()=>{
    getPokemons()
  },[])

const AppRoutes = () => {
  return(
    <Routes>
      <Route path="/" element= {<Buscador list={pokemonsList}/>}/>  
      <Route path="/:pokemonID" element= {<Card list={pokemonsList}/>}/>
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
