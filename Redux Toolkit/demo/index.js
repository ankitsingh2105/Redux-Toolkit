// Importing the Redux store
const store = require("../app/store");

// Importing cake action creators from the cake slice
const cakeActions = require("../features/cake/cakeSlice").cakeActions;

// Logging the initial state of the store
console.log("Initial State: ", store.getState());

// Logging the available cake action creators
console.log("Cake Actions: ", cakeActions);

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

// Unsubscribing from store updates
unSubscribe();
