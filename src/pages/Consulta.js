import './Consulta.css';
import { useState, useEffect } from 'react';

const url = 'http://localhost:3000/justificativas';


const Consulta = () => {

  const [justs, setJusts] = useState([])

  useEffect(() => {
    async function fetchData() {

      const res = await fetch(url)

      const data = await res.json()

      setJusts(data)
    }

    fetchData()
  }, [])


  return (
    <div className="painel_consulta">
      <h1>Lista de Justificativas</h1>
      <ul>
        {justs.map((j) => (
          <li key={j.id}>{j.turma}, {j.aluno}, {j.data}, {j.descricao}</li>
        ))}
      </ul>
    </div>
  )
}

export default Consulta