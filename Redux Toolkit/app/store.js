const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/iceCream/iceCreamSlice");
// todo :  this configureStore function accepts object as an argument
console.log("cakeReducer is : " , cakeReducer);
 
const store = configureStore({
    // accumulating all the reducer here in this file
    reducer : {
        cake :  cakeReducer,
        iceCream : iceCreamReducer
    }
})

module.exports = store; 