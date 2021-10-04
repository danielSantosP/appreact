import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './rotas/Header';
import Home from './rotas/Home';
import Login from './rotas/Login';
import NaoEncontrada from './rotas/NaoEncontrada';
import Sobre from './rotas/Sobre';

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
