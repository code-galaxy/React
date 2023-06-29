import Nav from "../Header/Nav";


function Header(props) {
   return (
      <div>

         <header>
            <h1>{props.dataHeader.site_name}</h1>
            <h2>{props.dataHeader.site_title}</h2>
         </header>

         <Nav dataNav={props.dataHeader.nav}/>

      </div>
   )
}

export default Header;