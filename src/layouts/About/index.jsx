import '../About/about.scss'
import Fade from 'react-reveal'


const About = () => {
  return ( 
    <section className='about'>
         <Fade left>
          <h1 className='backh1-about'>sobre</h1>
         </Fade>
        
       <Fade top>
      <div className='content-about'>
        <div className='logo-about'>
          <h1>voltz</h1>
        </div>

        <div className='text-about'>
          <h1>sobre</h1>
          <p>o site dedicado ao monitoramento de consumo de energia surge como uma ferramenta valiosa e oportuna. Ele não apenas proporciona uma visão clara e detalhada do nosso consumo de energia, mas também estimula uma mudança de mentalidade em direção a um estilo de vida mais consciente e responsável. </p>
          <p> À medida que exploramos esse futuro da eficiência energética, estamos pavimentando o caminho para um mundo mais sustentável.</p>
        </div>
      </div>
      </Fade>
    </section>
   );
}
 
export default About;