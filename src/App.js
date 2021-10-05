import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './rotas/Challenge/App.css'
import Contato from './rotas/Challenge/Contato';
import Footer from './rotas/Challenge/Footer';
import Header from './rotas/Challenge/Header';
import Produto from './rotas/Challenge/Produto';
import Produtos from './rotas/Challenge/Produtos'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Produtos />} />
          <Route path="/produto/:id" element={<Produto />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
