import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {ordered, restocked} from "../iceCream/iceCreamSlice";
export default function IceCreamView() {
  const numberOfIceCream = useSelector((state)=>{
    return state.iceCream.numberOfIceCream
 })
 const dispatch = useDispatch()
  return (
    <>
        <h2>Number of Ice Creams : {numberOfIceCream} </h2>
        <button onClick={() => dispatch(ordered())}>Order IceCream</button>
        <button onClick={() => dispatch(restocked(5))}>Restock IceCream</button>
    </> 
  )
}
