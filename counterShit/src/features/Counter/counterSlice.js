import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentNumber : 0
}

const counterSlice = createSlice({
    name : "counter",
    initialState,
    // todo : this has to be reducer only
    reducers : {
        increment : (state , action)=>{
            console.log(typeof(action));
            console.log(typeof(action.payload));
            state.currentNumber+= action.payload
            return state;
        },
        decrement : (state) =>{
            state.currentNumber--;
            return state;
        },
        reset : (state)=>{
            state.currentNumber=0;
            return state;
        }
    }
})

export default counterSlice.reducer;
export const {increment , decrement , reset} = counterSlice.actions;