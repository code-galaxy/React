import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {

  let input1Value = React.createRef();
  const [st1, setSt1] = useState('');

  function task1() {
    let value = input1Value.current.value;
    setSt1(value);
  }
  /* ============================================================= */

  const [st2, setSt2] = useState(0);

  function task2() {
    setSt2(st2 + 1);
  }
  /* ============================================================= */

  const [st3, setSt3] = useState('');

  function task3(event) {
    setSt3(event.target.value);
  }
  /* ============================================================= */

  const [st4, setSt4] = useState(0);

  function task4() {
    setSt4(st4 + 1);
  }
  /* ============================================================= */

  const [st5, setSt5] = useState('');

  function task5(event) {
    if (event.target.checked) setSt5(event.target.value);
    else setSt5(0);

  }
  /* ============================================================= */

  const [st6, setSt6] = useState('');

  function task6(event) {
    setSt6(event.target.value);
  }
  /* ============================================================= */

  const [st7, setSt7] = useState('');
  let block7 = React.createRef();

  function task7() {

    function randomNum(min = 0, max = 255) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    setSt7(`rgb(${randomNum()},${randomNum()},${randomNum()})`);
    block7.current.style.background = st7;
  }
  /* ============================================================= */

  const [st8, setSt8] = useState('');

  function task8(event) {
    if (isNaN(event.key) || event.key === ' ') setSt8(0);
    else setSt8(1);

  }
  /* ============================================================= */
  const [st9, setSt9] = useState('')

  function task9(event) {
    setSt9(event.target.value);
  }
  /* ============================================================= */

  const [st10, setSt10] = useState([]);
  let textInput = React.createRef();

  function task10() {
    setSt10([...st10, textInput.current.value]);
  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <input type="text" ref={input1Value} />
        <button className="task-1" onClick={task1}>Push</button>
        <div>{st1}</div>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
        <div>{st2}</div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
        <div>{st3}</div>
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4}>Count</button>
        <div>{st4}</div>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} />
        <div>{st5}</div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div>{st6}</div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={block7}></div>
        <button className="task-7" onClick={task7}>Color</button>
        <div>{st7}</div>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div>{st8}</div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div>{st9}</div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={textInput}></input>
        <button className="task-10" onClick={task10}>Push</button>
        <div>{st10 + ''}    Тут выводим - форма вывода любая!</div>
      </section>
    </>
  );
}

export default App;
