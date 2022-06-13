import './Navbar.css';

import {  Link } from 'react-router-dom';

const NavBar = () => {
  return <nav>
      <Link to="/">Home</Link>
      <Link to="/Cadastro">Cadastro</Link>
      <Link to="/Consulta">Consulta</Link>
  </nav>
}

export default NavBar