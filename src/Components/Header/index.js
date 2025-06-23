
import Card from './Card';
import Menu from './Menu';
import './index.css'

function Header(){
    const biografia = "Professor de Tecnologia ...";
    return(
        <header>
          <Card 
            fotoPerfil="fotoPerfil.jpeg"
            nome="Rafael A. Florindo" 
            biografia={biografia}
          />
          <Menu />
        </header>
    )
}

export default Header;