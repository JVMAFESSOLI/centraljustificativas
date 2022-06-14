import './Home.css';
import Logo from '../assets/images/logoescola.png';
import { FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

const Home = () => {
  return (
    <div className="home">

        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
      
        <div className="card">
          <h1>Escola de Educação Básica Professora Fulana de Tal</h1>

          <p>
            Trata-se de uma central de justificativas desenvolvida 
            em React a fim de reunir informações sobre faltas dos 
            alunos de uma escola.
            Basta acessar a guia Cadastro e começar a registar!
          </p>

          <h2>Desenvolvido por:</h2>

          <h3>José Vitor Mafessoli</h3>

          <div className="contato">

            <a href="https://github.com/JVMAFESSOLI/">
              <FaGithub className='link'/>
            </a>

            <a href="mailto:jvmafessoli.10@gmail.com">
            <AiOutlineMail className='link'/>
            </a>

          </div>


        </div>


    </div>
  )
}

export default Home