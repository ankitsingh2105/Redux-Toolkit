// Importing the Redux store
const store = require("../app/store");

// todo : Importing cake action creators from the cake slice
const cakeActions = require("../features/cake/cakeSlice").cakeActions;
const iceCreamActions = require("../features/iceCream/iceCreamSlice").iceCreamActions

// Subscribing to store updates and logging the updated state
const unSubscribe = store.subscribe(() => {
    console.log("Updated State: ", store.getState());
});

// Dispatching actions to simulate cake ordering and restocking
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(199));

// todo : for iceCream
console.log("\n")
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(iceCreamActions.restocked(677));

// Unsubscribing from store updates
unSubscribe();
