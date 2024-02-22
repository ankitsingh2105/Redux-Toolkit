import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {ordered , restocked} from "../cake/cakeSlice"
export default function CakeView() {
  const numberOfCakes = useSelector((state)=>{
     return state.cake.numberOfCakes
  })
  const dispatch = useDispatch();
  return (
    <>
        <h2>Number of Cakes : {numberOfCakes}</h2>
        <button onClick={() => dispatch(ordered())}>Order Cake</button>
        <button onClick={() => dispatch(restocked(5))}>Restock Cake</button>
    </>
  )
}
