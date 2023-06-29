import './App.css';
import React from 'react';
import { useState } from 'react';


function App() {

  function task1() {
    console.log('task2');
  }
  // ======================================================================//

  function task2(event) {
    event.target.classList.add('active');
  }
  // ======================================================================//

  function task3(event) {
    console.log(event.target.value);
  }
  // ======================================================================//

  //const [counter, setCouter] = useState(0);
  let count4 = 0;
  function task4() {
    count4++;
    //setCouter(counter + 1);
    //console.log(counter);
    console.log(count4);
  }
  // ======================================================================//

  /*   const [checked, setChecked] = useState('');
    function task5(event){
    if (event.target.checked) setChecked(event.target.value);
    else setChecked(0);
    } */

  let checkedOut = React.createRef();
  function task5(event) {
    if (event.target.checked) checkedOut.current.innerHTML = event.target.value;
    else checkedOut.current.innerHTML = 0;
  }
  // ======================================================================//

  let out6 = React.createRef();

  function task6(event) {
    out6.current.innerHTML = event.target.value;
  }
  // ======================================================================//

  let block7 = React.createRef();

  function task7() {

    function randomInt(min = 0, max = 255) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let bgColor = `rgb(${randomInt()},${randomInt()},${randomInt()})`;
    block7.current.style.background = bgColor;
  }

  // ======================================================================//

  let out8 = React.createRef();

  function task8(event) {
    //console.log(event.key);
    if (isNaN(event.key) || event.key === ' ') out8.current.innerHTML = 0;
    else out8.current.innerHTML = 1;
  }
  // ======================================================================//

  let out9 = React.createRef();

  function task9(event) {
    out9.current.innerHTML = event.target.value;
  }
  // ======================================================================//

  let ar10 = [5, 6, 7];
  let inputValue = React.createRef();

  function task10() {
    ar10.push(+inputValue.current.value);
    console.log(ar10);
  }
  // ======================================================================//


  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1}>Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2}></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4} >Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5} />
        {/* <div className="out-5" >{checked}</div> */} {/* only for useState() */}
        <div className="out-5" ref={checkedOut}></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6}>
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6" ref={out6}></div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7" ref={block7}></div>
        <button className="task-7" onClick={task7}>Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8" onKeyPress={task8}></input>
        <div className="out-8" ref={out8}></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onInput={task9}></input>
        <div className="out-9" ref={out9}></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" ref={inputValue}></input>
        <button className="task-10" onClick={task10}>Push</button>
      </section>
    </>
  );
}

export default App;
