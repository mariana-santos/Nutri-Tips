import { Link, Outlet } from "react-router-dom";
import logo from '../../assets/logo.png'
import './style.css'

export default function Header() {
  return (
    <div>
      <header>
       <div className='logo'>
         <img src={logo} alt='logo'/>
         <h1 className='app-name'>Nutri Tips</h1>
       </div>

       <nav>
         <ul>
           <li><Link to="/" className="link">Home</Link></li>
           <li><Link to="/artigos" className="link">Artigos</Link></li>
           <li><Link to="/sobre" className="link">Sobre nós</Link></li>
           <li><Link to="/contato" className="link">Contate-nos</Link></li>
          </ul>
        </nav>
        <Outlet/>
     </header>
    </div>
    
  );
}