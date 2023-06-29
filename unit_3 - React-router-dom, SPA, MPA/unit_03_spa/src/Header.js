import { Link } from 'react-router-dom';

function Header() {
   return (
      <>
         <nav>
            <ul>
               <li><Link to="/">Головна</Link></li>
               <li><Link to="/about">Про сайт</Link></li>
               <li><Link to="/cat">Категорії</Link></li>
            </ul>
         </nav>

      </>
   )
}
export default Header;