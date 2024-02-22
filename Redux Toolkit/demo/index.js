// Importing the Redux store
const store = require("../react-redux-toolkit-app/app/store");

// todo : Importing cake action creators from the cake slice
const { cakeActions } = require("../react-redux-toolkit-app/src/features/cake/cakeSlice");
const { iceCreamActions } = require("../react-redux-toolkit-app/src/features/iceCream/iceCreamSlice")
const { fetchUser } = require("../react-redux-toolkit-app/src/features/user/userSlice");
 
// Subscribing to store updates and logging the updated state
const unSubscribe = store.subscribe(() => { 
    // ! we dont need to add this console.log here as middleware will take care of this
    // console.log("Updated State: ", store.getState());
}); 
 
// todo : Dispatching actions to simulate cake ordering and restocking
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(200));

// todo : for iceCream        
console.log("\n")
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(300));
 
store.dispatch(fetchUser()); 
// Unsubscribing from store updates
unSubscribe();  
 

