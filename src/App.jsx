import { useState } from "react";
import { Link } from "react-router-dom"; // para navegar até a tela de cadastro
import "./App.css";
import logo1 from "./assets/apple.png";
import logo2 from "./assets/face.png";
import logo3 from "./assets/insta.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* div que centraliza */}
      <div className="quadrado">
        <div className="login">
          <h1>LOGIN</h1>

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
          {/* Link para ir até a tela de cadastro */}
          <Link to="/cadastro">Não tem conta? Cadastre-se</Link>
        </div>
      </div>
    </>
  );
}

export default App;
