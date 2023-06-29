import { Link } from 'react-router-dom';

function Header(props) {
   let data = props.data;
   let listItem = data.map(item => <li> <Link to={item.url}>{item.title}</Link></li>)
   
   return (
      <>
         <nav>
            <ul>
               {listItem}
            </ul>
         </nav>

      </>
   )
}
export default Header;