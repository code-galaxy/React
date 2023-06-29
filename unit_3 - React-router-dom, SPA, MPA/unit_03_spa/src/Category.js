import { Link } from 'react-router-dom';

function Category() {
   return (
      <>
         <Link to="/">Назад</Link>

         <h1>Category</h1>

         <ul>
            <li><Link to="/cat/notebook">Ноутбуки</Link></li>
            <li><Link to="/cat/monitor">Мониторы</Link></li>
            <li><Link to="/cat/cellphone">Мобильные телефоны</Link></li>
         </ul>
      </>
   )
}
export default Category;