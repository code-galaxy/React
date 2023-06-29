import { Link } from 'react-router-dom';

function Category(props) {
   let data = props.data;
   let listItem = data.map(item => <li><Link to={item.title}>{item.url}</Link></li>)

   return (
      <>
         <Link to="/">Назад</Link>
         <h1>Category</h1>
         <ul>
            {listItem}
         </ul>
      </>
   )
}
export default Category;