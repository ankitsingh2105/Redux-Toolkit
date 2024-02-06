const redux = require("redux");
const createStore = redux.createStore;
const CAKE_ORDERED = "CAKE_ORDERED";
const { orderCake, addedNewCake, reStock, addnewIceCream } = require("./actionCreaters");
const bindActionCreators = redux.bindActionCreators;
const combineReducers =  redux.combineReducers;

const initialCakeState = {
    numberOfCakes: 10,
    secondOne: 12,
    string : "somerandomeString"
}

const initalIceCreamState = {
    numberOfIceCream : 100,
    owner: "Chauhan"
}

// making a reducer

const CakeReducers = (state = initialCakeState, action) => {
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
const IceCreamReducer = (state = initalIceCreamState, action) => {
    switch (action.type) {
        case "addingNewIceCream":
            return {
                ...state, numberOfIceCream: state.numberOfIceCream + 1,
            }
        default:
            return state;
    }
}

const rootReducers = combineReducers({
    cake : CakeReducers,
    iceCream : IceCreamReducer
})

const store = createStore(rootReducers);
console.log("initial state : ", store.getState());

// subscribing to the changes 

const unSubscribe = store.subscribe(() => console.log(store.getState()));

// dispatching

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(addedNewCake());
// store.dispatch(addedNewCake());
// store.dispatch(reStock(100));

// todo :  instead of doing this we can use the bind method, but not so useful!!

const actions = bindActionCreators({orderCake , addedNewCake , reStock, addnewIceCream} , store.dispatch);

actions.addedNewCake();
actions.addedNewCake();
actions.addedNewCake();
actions.orderCake();
actions.reStock();
actions.addnewIceCream();
actions.addnewIceCream();
actions.addnewIceCream();




unSubscribe();
