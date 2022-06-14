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

        <div className="card_dinamico">

        <h1 className="title">Lista de Justificativas</h1>

            {justs.map((j) => (

              <div className="justificativa">
                <h1>{j.turma}</h1>
                <p>{j.data}</p>
                <p>{j.aluno}</p>
                <p>{j.descricao}</p>
              </div>

            ))}

        </div>

    </div>
  )
}

export default Consulta