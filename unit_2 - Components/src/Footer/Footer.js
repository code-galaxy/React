import Nav from "../Header/Nav";

function Footer(props) {
   return (
      <div>
         <h3>{props.dataFooter.site_name}</h3>
         <Nav dataNav={props.dataFooter.nav} />
      </div>
   )
}

export default Footer;