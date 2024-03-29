import { Link, Outlet } from "react-router-dom";
import logo from '../../assets/logo.png'
import './style.css'

export default function Footer() {
  return (
      <footer>
       <div className='logo'>
         <img src={logo} alt='logo'/>
         <h1 className='app-name'>Nutri Tips</h1>
       </div>

         <ul>
           <li className="social-media">
             <h2>Siga-nos: </h2>
              <i className="fa fa-instagram i-footer"></i>
              <i className="fa fa-facebook"></i>
              <i className="fa fa-twitter"></i>
              <i className="fa fa-youtube"></i>
              <i className="fa fa-linkedin"></i>
           </li>
          </ul>

          <ul>
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/artigos" className="link">Artigos</Link></li>
            <li><Link to="/sobre" className="link">Sobre nós</Link></li>
           </ul>
        <Outlet/>
     </footer>
  );
}