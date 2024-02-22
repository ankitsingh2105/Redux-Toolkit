import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from './counterSlice';
export default function Counter() {
  const countNumber = useSelector((state) => {
    // todo : counter is the name of the reducer i had declared 
    return state.counter.currentNumber;
  })
  const dispatch = useDispatch();
  return (
    <>
      <main style={{ marginTop: "1rem" }}>
        <h2>Welcome to Counter</h2>
        <div>{countNumber}</div>
        <br />
        <button onClick={() => { dispatch(increment(9)) }} >Increment</button>&nbsp;
        <button onClick={() => { dispatch(decrement()) }} >Decrement</button>&nbsp;
        <button onClick={() => { dispatch(reset()) }} >Reset</button>
      </main>
    </>
  )
}
