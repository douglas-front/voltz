import Nav from "../../components/Nav";
import About from "../../layouts/About";
import Elementos from "../../layouts/Elementos";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import Participants from "../../layouts/Participants";
import Fade from 'react-reveal'

const Home = () => {
    return ( 
        <>
         <Fade>
            <Nav/>
            <main>
                <Header/>
                <About/>
                <Elementos/>
                <Participants/>
                <Footer/>
            </main>
         </Fade>
        </>
     );
}
 
export default Home;