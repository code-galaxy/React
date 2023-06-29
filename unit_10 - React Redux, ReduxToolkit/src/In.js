import React from 'react';
import { useDispatch } from 'react-redux';
import { add, minus, multi, division, addText } from './app/taskReducerSlice';

export default function In() {

   let task1Input = React.createRef();
   let task2Input = React.createRef();
   const dispatch = useDispatch();

   const addHandler = () => {
      dispatch(add(task1Input.current.value));
   }

   const minusHandler = () => {
      dispatch(minus(task1Input.current.value));
   }

   const multiHandler = () => {
      dispatch(multi(task1Input.current.value));
   }
   const divisionHandler = () => {
      dispatch(division(task1Input.current.value));
   }
   const textHandler = () => {
      dispatch(addText(task2Input.current.value));
   }
   return (
      <div>
         <input type="number" ref={task1Input} />
         <h2>Task 1</h2>
         <button onClick={addHandler} className='btn'>+</button>
         <button onClick={minusHandler} className='btn'>-</button>
         <button onClick={multiHandler} className='btn'>*</button>
         <button onClick={divisionHandler} className='btn'>/</button>
         <hr />
         <h2>Task 10</h2>
         <input type="text" ref={task2Input} />
         <button onClick={textHandler} className='btn'>text</button>
      </div>
   )
}

