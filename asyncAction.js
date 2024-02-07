const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
    loading : false , 
    users : [],
    error : ""
};

const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED"; 
const FETCH_USER_SUCCEECED = "FETCH_USER_SUCCEEDED"; 
const FETCH_USER_FALIED = "FETCH_USER_FAILED"; 

const fetchUserRequest = () =>{
    return{
        type :FETCH_USER_REQUESTED
    }
} 
const fetchUserSuccess = (user) =>{
    return {
        type : FETCH_USER_SUCCEECED,
        users : user
    }
}
const fetchUserFalied = (error) =>{
    return {
        type : FETCH_USER_FALIED,
        payload : error 
    }
}

const reducer = (state=initialState , action) =>{
    switch (action.type){
        case FETCH_USER_REQUESTED :
            return{
                ...state , loading : true
            }
        case FETCH_USER_SUCCEECED:
            return{
                loading : false ,user : action.users , error :""
            }
        case FETCH_USER_FALIED:
            return{
                loading : false , user:[] , error : action.payload
            }
    }
}

const store = createStore(reducer);