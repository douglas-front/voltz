import '../Participants/participants.scss'

import Douglas from '../../img/Douglas.jpg'
import Kenzy from '../../img/Kenzy.jpg'

import Anderson from '../../img/Anderson.jpg'
import Gustavo from '../../img/Gustavo.jpg'

import Ricardo from '../../img/Ricardo.jpg'
import Alef from '../../img/Alef.jpg'

import Fade from 'react-reveal'

const Participants = () => {

  const part1 = [
    {
      name: 'Anderson',
      img: Anderson,
      function: 'pesquisa'
    },
    {
      name: 'Alef',
      img: Alef,
      function: 'pesquisa'
    },
    {
      name: 'Ricardo',
      img: Ricardo,
      function: 'pesquisa'
    },
  ]
  const part2 = [
    {
      name: 'Anderson',
      img: Kenzy,
      function: 'ideias/fotos'
    },
    {
      name: 'Douglas',
      img: Douglas,
      function: 'programador'
    },
    {
      name: 'gustavo',
      img: Gustavo,
      function: 'fotos'
    },
  ]
  return ( 
    <section id='Participants' className='participants'>
      <div className='content-participants'>
          <h1>participantes</h1>

        <div className='names1'>
        <Fade left>
          {part1.map((person , key)=>(

            <div className='person' key={key}>
              <img src={person.img} alt="person" />
              <h1>{person.name}</h1>
              <p>{person.function}</p>
            </div>

          ))}
        </Fade>
        </div>

        <div className='names2'>
        <Fade right>
          
          {part2.map((person , key)=>(

            <div className='person' key={key}>
              <img src={person.img} alt="person" />
              <h1>{person.name}</h1>
              <p>{person.function}</p>
            </div>

          ))}
          </Fade>
        </div>

      </div>
    </section>
   );
}
 
export default Participants;