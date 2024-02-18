// Importing necessary dependencies
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import reduxLogger from "redux-logger";

// Importing reducers from their respective files
import cakeReducer from "../src/features/cake/cakeSlice";
import iceCreamReducer from "../src/features/iceCream/iceCreamSlice";
import userReducer  from "../src/features/user/userSlice";

// Creating a logger instance
const logger = reduxLogger.createLogger();

// Configuring the Redux store
const store = configureStore({
    // Combining reducers into a root reducer
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user : userReducer,
    },
    // Adding middleware to enhance Redux's capabilities
    middleware: [...getDefaultMiddleware(), logger],

    // ! or we can do somthing like this 
    //todo:  middleware: getDefaultMiddleware =>
    //todo:  getDefaultMiddleware().concat(logger) , 
});


export default store;
