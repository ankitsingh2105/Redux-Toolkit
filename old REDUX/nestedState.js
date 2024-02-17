const redux = require("redux");
// todo : from the immer 
const produce = require("immer").produce;
const createStore = redux.createStore;
const initialState ={
    name : "Ankit",
    address : {
        street : 23,
        city :  "Haldwani",
        state : "Uttarakahnd"
    }
}

const type = "updating";


function chanageAddress(newCity , newState){
    return{
        type : type,
        city : newCity,
        state :  newState
    }
}

// making a reducer'

const reducer = (state = initialState , action)=>{
    switch(action.type){
        case type:
            // return{
            //     ...state , name : "Ankit Singh Chauhan" , 
            //     address : {
            //         ...state.address , city : action.city , state : action.state
            //     }
            // }
            return produce(state , (draft)=>{
                draft.address.city = action.city;
                draft.address.state= action.state;
            })
        default:
            return state;
    }
}

const store = createStore(reducer);
console.log("this is the initialState  : " ,store.getState());
store.dispatch(chanageAddress("Bhopal" , "Madhya Pradesh"));
console.log("this is the finalState: " ,store.getState()); 