import "../css/Layout-text.css";

import iconCredies from "../img/CredIES.svg";
import iconCredTec from "../img/CredTEC.svg";
import iconCredNex from "../img/CredNEX.svg";
import iconCredNeo from "../img/CredNEO.svg";
import iconCredCorp from "../img/CREDCORP.svg";
import iconMa from "../img/MA.svg";

function LayoutText(props) {
  return (
    <div className="layout-text" style={{ width: props.largura }}>
        <div className="wrapper-flex-text">
          <div className="block-text">
            <h3>
              Faça login para 
              <span className="bold-text"> acessar sua conta!</span>
            </h3>
          </div>
        </div>
        <div className="wrap-logos">
            <div className="block-logo">
            <img src={iconCredies} alt="credies" />
            </div>
            <div className="block-logo">
            <img src={iconCredTec} alt="credtec" />
            </div>
            <div className="block-logo">
            <img src={iconCredNex} alt="crednex" />
            </div>
            <div className="block-logo">
            <img src={iconCredNeo} alt="crednex" />
            </div>
            <div className="block-logo">
            <img src={iconCredCorp} alt="crednex" />
            </div>
            <div className="block-logo">
            <img src={iconMa} alt="ma" />
            </div>
        </div>
    </div>
    
  );
}

export default LayoutText;
