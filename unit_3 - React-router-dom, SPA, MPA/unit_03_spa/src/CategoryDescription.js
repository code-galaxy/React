import { useParams, Link } from "react-router-dom";

function CategoryDescription() {
   let { nameCategory } = useParams();
   return (
      <>
         <Link to="/cat">Назад</Link>
         <h1>Category: {nameCategory}</h1>
      </>
   )
}

export default CategoryDescription;