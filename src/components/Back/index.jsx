import {Link} from 'react-router-dom'
// import {AiFillHome} from 'react-icons'
import './back.scss'
const Back = () => {
  return ( 
    <>
      <Link to={'/'} className='back'>home</Link>
    </>
   );
}
 
export default Back;