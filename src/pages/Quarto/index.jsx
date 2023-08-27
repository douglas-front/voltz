
import { useState } from "react";
import './quarto.scss'
import Fade from 'react-reveal'
import Back from "../../components/Back";


import tv from '../../items_img/quarto_img/tv.png'
import ventilador from '../../items_img/quarto_img/ventilador.png'
import ar from '../../items_img/quarto_img/ar.png'
import lampada from '../../items_img/quarto_img/lampada.png'

const Quarto = () => {
  const [tvItem , setTvItem] = useState(0)
  const [ventiladorItem , setVentiladorItem] = useState(0)
  const [arItem , setArItem] = useState(0)
  const [lampadaItem , setLampadaItem] = useState(0)

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
      item: ar,
      use: arItem,
      set: setArItem
    },
    {
      item: lampada,
      use: lampadaItem,
      set: setLampadaItem
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

    const soma = (arItem * 122.50) + (lampadaItem * 7.70) + (ventiladorItem * 19.25) + (tvItem * 40.25) 
    setResultado(soma + 'R$')
  }

  return ( 
    <>
      <section className="items-quarto">
        <Fade left>
          <h1>Quarto</h1>
        </Fade>

        <div className="content-items-quarto">
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
        <div className="results-quarto">
          <button onClick={soma}>Ver media de conta</button>
          <h1>{resultado}</h1>
        </div>
      </Fade>

      <Back/>
    </>
   );
 
}
 
export default Quarto;