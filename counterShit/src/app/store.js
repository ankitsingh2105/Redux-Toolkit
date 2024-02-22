import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice";
import weatherReducer from "../features/Weather/weatherSlice"
const store = configureStore({
    reducer : {
        counter : counterReducer,
        weather : weatherReducer,
    }
})

export default store;