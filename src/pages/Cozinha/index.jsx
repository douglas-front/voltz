

import { useState } from "react";
import './cozinha.scss'
import Fade from 'react-reveal'
import Back from "../../components/Back";

import lampada from '../../items_img/quarto_img/lampada.png'
import batedeira from '../../items_img/cozinha_img/batedeira.png'
import chapa from '../../items_img/cozinha_img/chapa.png'
import geladeira from '../../items_img/cozinha_img/geladeira.png'
import liquidificador from '../../items_img/cozinha_img/liquidificador.png'
import microondas from '../../items_img/cozinha_img/microondas.png'

const Cozinha = () => {

  const [lampadaItem , setLampadaItem] = useState(0)
  const [batedeiraItem , setBatedeiraItem] = useState(0)
  const [chapaItem , setChapaItem] = useState(0)
  const [geladeiraItem , setGeladeiraItem] = useState(0)
  const [liquidificadorItem , setLiquidificadorItem] = useState(0)
  const [microondasItem , setMicroondasItem] = useState(0)
  
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
      item: batedeira,
      use: batedeiraItem,
      set: setBatedeiraItem
    },
    {
      item: chapa,
      use: chapaItem,
      set: setChapaItem
    },
    {
      item: geladeira,
      use: geladeiraItem,
      set: setGeladeiraItem
    },
    {
      item: liquidificador,
      use: liquidificadorItem,
      set: setLiquidificadorItem
    },
    {
      item: microondas,
      use: microondasItem,
      set: setMicroondasItem
    },
  ]
  // console.log(quantidade)


  function soma (){

    const soma = (batedeiraItem * 2.10) + (lampadaItem * 7.70) + (chapaItem * 3.85) + (geladeiraItem * 70) + (liquidificadorItem * 2.10) + (microondasItem * 12.25) 
    setResultado(soma + 'R$')
  }

  return ( 
    <>
      <section className="items-cozinha">
        <Fade left>
          <h1>Quarto</h1>
        </Fade>

        <div className="content-items-cozinha">
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
        <div className="results-cozinha">
          <button onClick={soma}>Ver media de conta</button>
          <h1>{resultado}</h1>
        </div>
      </Fade>

      <Back/>
    </>
   );
 
}
 
export default Cozinha;