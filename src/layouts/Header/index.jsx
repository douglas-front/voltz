import './header.scss'
import Fade from 'react-reveal'
const Header = () => {
    return ( 
        <header>

            <div className="content-header">
        <Fade left>

                <h1>Bem vindo a <span>Voltz</span></h1>
                <p>calcule sua media de preço da conta de luz </p>
                <a href="#element"><button>Começar</button></a>

        </Fade>
            </div>

            <div className='background'></div>
        </header>
     );
}
 
export default Header;