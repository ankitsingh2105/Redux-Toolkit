import {createSlice} from "@reduxjs/toolkit";

import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
    numberOfIceCream: 20
}
const iceCreamSlice = createSlice({
    name: "IceCream",
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfIceCream--;
        },
        restocked: (state, action) => {
            state.numberOfIceCream += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state) => {
            state.numberOfIceCream--;
        })
    }
});


// todo : this reducer and actions is provided by redux toolkit only
// The actions property contains all of the action creators generated by createSlice based on the reducers object you provided
export default iceCreamSlice.reducer;
export const { ordered , restocked } = iceCreamSlice.actions;

