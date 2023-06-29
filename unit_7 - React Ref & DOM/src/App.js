import './App.css';
import Goods from './Goods';
import Cart from './Cart';
import goodsArr from './goods.json';

import React, { useState } from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      'cart': {},
      'count': 0
    }
  }

  addToCart = (event) => {
    event.preventDefault();
    // console.log(event.target);
    
    if (!event.target.classList.contains('add-to-cart')) return false;
    let cartTemp = this.state.cart;
    cartTemp[event.target.dataset.key] ? cartTemp[event.target.dataset.key]++ : cartTemp[event.target.dataset.key] = 1;
    // cartTemp++;
    this.setState({ cart: cartTemp });
    let count = this.state.count;
    count++;
    this.setState({ 'count': count })
  }

  render() {
    let showCart;
    if (this.state.count !== 0) {
      showCart = <Cart cart={this.state.cart} goods={goodsArr} />;
    }
    else {
      showCart = 'Empty';
    };



    return (
      <div className='container'>
        <h1>Cart</h1>
        <div className='goods-field' onClick={this.addToCart}>
          {goodsArr.map(item => <Goods title={item.title} cost={item.cost} image={item.image} articul={item.articul} key={item.articul} />)}
        </div>
        {showCart}
      </div>
    )
  }
}

export default App;




// event.preventDefault();
// Добрый день!
// Unit 7 Task 8 - не совсем понял для чего event.preventDefault(). После прочтения в интернете, я понял что это как бы «отменяет действия события». Но, зачем в нашем примере он? Что он делает?
// Ответ:
// В форме если нажата кнопка то форма перезагружается и данные отправляются на адрес указанный в action формы. Если мы хотим получить данные из формы но не отправлять, а допустим, обработать и отправить через fetch или просто работать с данными, нужно отключить отправку формы - перезагрузку страницы. Именно для этого и применяется event.preventDefault()