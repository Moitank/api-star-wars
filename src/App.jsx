import React, { useEffect, useState } from 'react';
import './App.css';
import api from './services/api';
import Botao from './Components/Botao'

function App() {

  const [planeta, setPlaneta] = useState({});

  function random  ()  {
    return alert(Math.floor(Math.random() * (61 - 0)))
    }


  useEffect(() => {
    api.get(`/planets/`).then((res) => {
      setPlaneta(res.data);
      
    })


    
  }, []);


  return (
    <div className="App">
     <p>Nome: {planeta.name}</p>
     <p>Clima: {planeta.climate}</p>
     <p>População: {planeta.population}</p>
     <Botao onClick={random}>Próximo</Botao>
     <Botao onClick={random}>Próximo</Botao>
     

    </div>
  );
}

export default App;
