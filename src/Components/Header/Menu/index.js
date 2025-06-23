import { Link } from "react-router-dom";
import './index.css';

function Menu(){
    return(
        <nav>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/calcularDesconto">CalcularDesconto</Link></li>
            </ul>
          </nav>
    )
}
    
export default Menu;