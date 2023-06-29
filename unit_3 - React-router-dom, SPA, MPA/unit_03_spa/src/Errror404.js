import { Link } from 'react-router-dom';

function Error404() {
   return (
      <>
         This page doesn't exist. Go <Link to="/">home</Link>
      </>
   )
}
export default Error404;