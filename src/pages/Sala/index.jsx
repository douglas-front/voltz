import { useState } from "react";
import './sala.scss'
import Fade from 'react-reveal'


import roteador from '../../items_img/sala_img/roteador.png'
import tv from '../../items_img/sala_img/tv.png'
import console from '../../items_img/sala_img/console.png'
import ventilador from '../../items_img/sala_img/ventilador.png'
import Back from "../../components/Back";


const Sala = () => {
  const [consoleItem , setConsoleItem] = useState(0)
  const [tvItem , setTvItem] = useState(0)
  const [ventiladorItem , setVentiladorItem] = useState(0)
  const [roteadorItem , setRotadorItem] = useState(0)

  const [resultado , setResultado] =  useState(0)
  




  function addQuantity(setUse){
    setUse(prevUse => prevUse + 1)
  }
  function removeQuantity(setUse , use){
    setUse(prevUse => prevUse - 1)

    if(use <= 0){
      setUse(0)
    }
  }

  const items = [
    {
      item: roteador,
      use: roteadorItem,
      set: setRotadorItem
    },
    {
      item: console,
      use: consoleItem,
      set: setConsoleItem
    },
    {
      item: tv,
      use: tvItem,
      set: setTvItem
    },
    {
      item: ventilador,
      use: ventiladorItem,
      set: setVentiladorItem
    },
  ]
  // console.log(quantidade)


  function soma (){

    const soma = (roteadorItem * 2.10) + (consoleItem * 22.75) + (ventiladorItem * 19.25) + (tvItem * 40.25) 
    setResultado(soma + 'R$')
  }

  return ( 
    <>
      <section className="items">
        <Fade left>
          <h1>Sala</h1>
        </Fade>

        <div className="content-items">
        <Fade left>
          {items.map((item , index)=>(
            <div className="card" key={index}>
              <button onClick={()=> removeQuantity(item.set , item.use)}>-</button>

              <img src={item.item} alt="image" />
              <h2>{item.use}</h2>

              <button onClick={()=> addQuantity(item.set)}>+</button>
            </div>
          ))}
        </Fade>
        </div>
      
      </section>
      <Fade top>
        <div className="results">
          <button onClick={soma}>Ver media de conta</button>
          <h1>{resultado}</h1>
        </div>
      </Fade>

      <Back/>
    </>
   );
 
}
 
export default Sala;