

import { useState } from "react";
import './banheiro.scss'
import Fade from 'react-reveal'
import Back from "../../components/Back";

import lampada from '../../items_img/banheiro_img/lampada.png'
import maquina from '../../items_img/banheiro_img/maquina.png'

const Banheiro = () => {
 
  const [lampadaItem , setLampadaItem] = useState(0)
  const [maquinaItem , setMaquinaItem] = useState(0)
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
      item: lampada,
      use: lampadaItem,
      set: setLampadaItem
    },
    {
      item: maquina,
      use: maquinaItem,
      set: setMaquinaItem
    }
  ]
  // console.log(quantidade)


  function soma (){

    const soma = (maquinaItem * 28.00) + (lampadaItem * 7.70) 
    setResultado(soma + 'R$')
  }

  return ( 
    <>
      <section className="items-banheiro">
        <Fade left>
          <h1>Banheiro</h1>
        </Fade>

        <div className="content-items-banheiro">
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
        <div className="results-banheiro">
          <button onClick={soma}>Ver media de conta</button>
          <h1>{resultado}</h1>
        </div>
      </Fade>

      <Back/>
    </>
   );
}
 
export default Banheiro;