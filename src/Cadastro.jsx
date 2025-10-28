import { Link } from "react-router-dom";
import logo1 from "./assets/apple.png";
import logo2 from "./assets/face.png";
import logo3 from "./assets/insta.png";
import "./Cadastro.css";

function Cadastro() {
  return (
    <div className="quadrado">
      <div className="cadastro">
        <h1>CADASTRO</h1>
        <p>Nome:</p>
        <input type="text" />
        <p>E-mail:</p>
        <input type="email" />
        <p>CPF:</p>
        <input type="text" />
        <p>Usuário:</p>
        <input type="text" />
        <p>Senha:</p>
        <input type="password" />
        <div>
          <input type="checkbox" id="botao" />
          <label htmlFor="botao">Manter conectado</label>
        </div>
        <p></p>
        <a href="#">Esqueci a senha</a>
        <p></p>
        <button>Entrar</button>
        <p>Logar com</p>
        <img src={logo1} alt="apple" className="logo1" />
        <img src={logo2} alt="face" className="logo2" />
        <img src={logo3} alt="insta" className="logo3" />
        <p></p>
        <Link to="/">Já tem conta? Faça login</Link>
      </div>
    </div>
  );
}

export default Cadastro;
