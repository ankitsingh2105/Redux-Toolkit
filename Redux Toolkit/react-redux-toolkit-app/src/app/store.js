// Importing necessary dependencies
import {configureStore} from "@reduxjs/toolkit";

// Importing reducers from their respective files
import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/iceCream/iceCreamSlice";
import userReducer from "../features/user/userSlice";


// Configuring the Redux store
const store = configureStore({
    // Combining reducers into a root reducer
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer,
        user: userReducer,
    },
    // Adding middleware to enhance Redux's capabilities
    // middleware: [...getDefaultMiddleware(), logger],

    // ! or we can do somthing like this 
    //todo:  middleware: getDefaultMiddleware =>
    //todo:  getDefaultMiddleware().concat(logger) , 
});


export default store;
