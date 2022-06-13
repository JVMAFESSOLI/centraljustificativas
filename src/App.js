import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home';
import Cadastro from './pages/Cadastro';
import Consulta from './pages/Consulta';

import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">

      <div className="painel">
        <h1>Central de Justificativas</h1>
      </div>
      
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Consulta" element={<Consulta />} />
        </Routes>      

      </BrowserRouter>
     
    </div>
  );
}

export default App;
