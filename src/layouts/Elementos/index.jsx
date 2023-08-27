import './elementos.scss'
import {Link} from 'react-router-dom'
import sala from '../../cards_img/sala.avif'
import quarto from '../../cards_img/quarto.avif'
import cozinha from '../../cards_img/cozinha.avif'
import banheiro from '../../cards_img/banheiro.jpg'
import Fade from 'react-reveal'

const Cards = () => {

  const card = [
    {
      name: 'sala',
      img: sala,
      for: 'sala'
    },
    {
      name: 'quarto',
      img: quarto,
      for: 'quarto'
    },
    {
      name: 'cozinha',
      img: cozinha,
      for: 'cozinha'
    },
    {
      name: 'banheiro',
      img: banheiro,
      for: 'banheiro'
    },
  ]

  return ( 
    <section id='element' className="elementos">
      <h1 className='backh1-elementos'>Comodos</h1>
      <div className="content-elementos">
      <Fade left>
        {card.map((elemento , index)=> (
          <Link to={elemento.for} key={index}><div className="card-elementos">
            <img src={elemento.img} alt="img" />
            <h1>{elemento.name}</h1>
          </div></Link>
        ))}
      </Fade>
        

      </div>
    </section>
   );
}
 
export default Cards;