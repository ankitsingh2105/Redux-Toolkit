const redux = require("redux");
const createStore = redux.createStore;
const CAKE_ORDERED = "CAKE_ORDERED";
const { orderCake, addedNewCake, reStock } = require("./actionCreaters");
const bindActionCreators = redux.bindActionCreators;

const initialState = {
    numberOfCakes: 10,
    secondOne: 12,
    string : "somerandomeString"
}

// making a reducer

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state, numberOfCakes: state.numberOfCakes - 1,
            }
        case "AddingNewCake":
            return {
                ...state, numberOfCakes: state.numberOfCakes + 1
            }
        case "restocking":
            return{
                ...state, numberOfCakes : state.numberOfCakes + action.quantity ,
                string : action.string
            }
        default:
            return state;
    }
}
const store = createStore(reducer);
console.log("initial state : ", store.getState());

// subscribing to the changes 

const unSubscribe = store.subscribe(() => console.log("this is something : ", store.getState()));

// dispatching

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(addedNewCake());
// store.dispatch(addedNewCake());
// store.dispatch(reStock(100));

// todo :  instead of doing this we can use the bind method, but not so useful!!

const actions = bindActionCreators({orderCake , addedNewCake , reStock} , store.dispatch);

actions.addedNewCake();
actions.addedNewCake();
actions.addedNewCake();
actions.orderCake();
actions.reStock();




unSubscribe();
