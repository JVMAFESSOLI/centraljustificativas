import './Form.css'

import { useState } from "react";

const Form = ({user}) => {

  const [turma, setTurma] = useState(user ? user.turma : '');
  const [aluno, setAluno] = useState(user ? user.aluno : '');
  const [data, setData] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleTurma = (e) => {
    setTurma(e.target.value)
  }

  const handleAluno = (e) => {
    setAluno(e.target.value)
  }

  const handleData = (e) => {
    setData(e.target.value)
  }

  const handleDescricao = (e) => {
    setDescricao(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log("Enviando o Formulário")
    console.log(turma, aluno, data, descricao)

    setTurma('')
    setAluno('')
    setData('')
    setDescricao('')
  }

  return (
    <div className="painel_cadastro">
      <form onSubmit={handleSubmit}>

        <h1>Cadastro de Justificativas</h1>

          <label>

            <span>Turma:</span>

            <select name="turma" className="options" onChange={handleTurma} value={turma}>

              <option value="indefinido" selected > Selecione</option>
              <option value="1 série"> 1° Série</option>
              <option value="2 série"> 2° Série</option>
              <option value="3 série"> 3° Série</option>
              <option value="4 série"> 4° Série</option>
              <option value="5 série"> 5° Série</option>

            </select>

          </label>

          <label>
            <span>Aluno:</span>
            <select 
              name="aluno" 
              className="options" 
              onChange={handleAluno}
              value={aluno}
              >

              <option value="indefinido" selected> Selecione</option>
              <option value="João da Silva"> João da Silva</option>
              <option value="Francisca Imaculada"> Francisca Imaculada</option>
              <option value="Josefina Izaura"> Josefina Izaura</option>
              <option value="Sirineu Velasques"> Sirineu Velasques</option>
              <option value="Juarez Peixoto"> Juarez Peixoto</option>

            </select>
          </label>

          <label>
            <span>Data:</span>
            <input 
              type="date" 
              onChange={handleData}
            />
          </label>

          <label>
            <span>Descrição:</span>
            <textarea 
              name="descricao" 
              placeholder='Descreva a Justificativa' 
              onChange={handleDescricao} 
              value={descricao}>
            </textarea>
          </label>

        <div className="botoes">
          <input type="submit" value="Cadastrar" />
          <input type="reset" value="Limpar" />
        </div>

      </form>
    </div>
  )
}

export default Form