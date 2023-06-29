import './App.css';
import React, { useState } from 'react';

function App() {

  const h1 = React.createElement('h1', {}, 'unit_08');
  const h2 = React.createElement('h2', { 'className': 'text-orange' }, 'header 2');
  const p = React.createElement('p', { 'style': { 'color': 'red' } }, 'this is p');
  const input = React.createElement('input', { defaultValue: 55 });

  const p1 = React.createElement('p', {}, 'hi');
  const p2 = React.createElement('p', {}, 'world');
  const div = React.createElement('div', { 'className': 'text-grey' }, [p1, p2]);


  // ====================================================

  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState([]);

  const listItem = {
    value: inputValue,
    uniqueKey: Math.random()
  };

  function clickButton() {
    if (inputValue !== '') {
      setList([...list, listItem]);
      setInputValue('');
    }
  }

  function getInputValue(event){
    setInputValue(event.target.value)
  }

  return (
    <>
      {h1}
      {h2}
      {p}
      {div}
      {input}

      <div>
        <input type="text" onChange={getInputValue} value={inputValue} />
        <button onClick={clickButton}>Button</button>
        <ul>
          {list.map((item) => (<li key={item.uniqueKey}>{item.value}</li>))}
        </ul>
      </div>

    </>
  )
}

export default App;
