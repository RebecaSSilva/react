import "../css/Layout-login.css";
import { ImConnection } from "react-icons/im";
import mainLogo from "../img/main-logo.png";

function LayoutLogin(props) {
  return (
    <div className="layout-login" style={{ width: props.largura }}>
      <div className="main-logo">
        <img src={mainLogo} alt="logo" />
      </div>

      <form className="wrapper-form" action="/">
        <label htmlFor="Email">Email</label>
        <input type="email" name="email" />

        <label htmlFor="senha">Senha</label>
        <input type="password" name="senha" />
        <div className="help-links">
          <a href="/esqueci-senha">Esqueci minha senha</a>
          <a href="/registro">Ainda não sou cliente</a>
        </div>
        <div className="btn-wrapper">
          <button className="btn-form" type="submit">
            Entrar
          </button>
        </div>
      </form>

      <div className="vestibular-button">
        <a href="/">
          <div className="icon-link-vestibular">
            <div className="wrapper-icon">

              <ImConnection />
            </div>
          </div>
          Vestibular Digital
        </a>
      </div>
    </div>
  );
}
export default LayoutLogin;
