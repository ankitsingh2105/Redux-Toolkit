const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleWare = require('redux-thunk').thunk;
const axios  = require("axios");
const logger = require('redux-logger').createLogger;


const initialState = {
    loading: false,
    users: [],
    error: ""
};

// actions types
const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USER_SUCCEEDED = "FETCH_USER_SUCCEEDED";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";


// action creators
const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUESTED
    };
};
const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCEEDED,
        payload: user
    };
};
const fetchUserFailed = (error) => {
    return {
        type: FETCH_USER_FAILED,
        payload: error
    };
};

// action creator
// using this thunk the action creator can return a function insted of a object
// otherwise we were retuning a object alaways
const fetchUsers = () => {
    // Implement asynchronous logic here if needed
    return async function(dispatch){
        dispatch(fetchUserRequest());
        try{
            let response = await axios.get("https://jsonplaceholder.typicode.com/users");
            const user = response.data.map((user)=>user.name);
            dispatch(fetchUserSuccess(user));
        }
        catch(error){
            dispatch(fetchUserFailed(error.message));
        }
    }
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USER_REQUESTED:
            return {
                ...state,
                loading: true
            };
        case FETCH_USER_SUCCEEDED:
            return {
                loading: false,
                users: action.payload,
                error: ""
            };
        case FETCH_USER_FAILED:
            return {
                loading: false,
                users: [],
                error: action.payload
            };
        default:
            return state;
    }
};


// todo : using this thinkmiddleware i am able to return a function in an action Creator instead of a object!!
const store = createStore(reducer, applyMiddleware(thunkMiddleWare));
 
const unSubscribe = store.subscribe(()=>{ console.log(" initial State  : " , store.getState())});
store.dispatch(fetchUsers());