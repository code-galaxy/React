function Nav(props) {
   let data = props.dataNav;
   console.log(data);
   const listItem = data.map(item =>
      <li key={item.link}>
         <a href={item.link}>{item.text}</a>
      </li>);

   return (
      <div>
         <nav>
            <ul className="main-navigation">
               {listItem}
            </ul>
         </nav>
      </div>
   )
}

export default Nav;