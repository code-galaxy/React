import './App.css';

import goodsArr from './goods.json';
import Cart from './Cart';
import Goods from './Goods';
import React, { useState } from 'react';



function App() {

const [cart, setCart] = useState({})
const [count, setCount] = useState(0);

  function addToCart(event) {
     event.preventDefault();

    if (!event.target.classList.contains('add-to-cart')) return false;
    let cartTemp = cart;

    cartTemp[event.target.dataset.key] ? cartTemp[event.target.dataset.key]++ : cartTemp[event.target.dataset.key] = 1;

    setCart(cartTemp)

    let counter = count;
    setCount(count+1);
  }

console.log(count)
console.log(cart)

  let showCart;

  if (count !== 0) showCart = <Cart cart={cart} goods={goodsArr} />
  else   showCart = 'Пуста  корзина';


  return (
    <div className="container">
      <h1>Cart</h1>
      <div className='goods-field' onClick={addToCart}>
        {goodsArr.map(item => <Goods image={item.image} title={item.title} cost={item.cost} articul={item.articul} key={item.articul} />)}
      </div>
      {showCart}
    </div>
  )
}

export default App;




// event.preventDefault відміняє стандартну дію - перезавантаження сторінки якщо у формі натиснуто кнопку

// В форме если нажата кнопка то форма перезагружается и данные отправляются на адрес указанный в action формы. Если мы хотим получить данные из формы но не отправлять, а допустим, обработать и отправить через fetch или просто работать с данными, нужно отключить отправку формы - перезагрузку страницы. Именно для этого и применяется event.preventDefault()


