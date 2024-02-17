const createSlice = require("@reduxjs/toolkit").createSlice;


const initialState = {
    numberOfIceCream : 20
}
const iceCreamSlice = createSlice({
    name : "IceCream",
    initialState,
    reducers : {
        ordered : (state) => {
            state.numberOfIceCream-- ;
        },
        restocked : (state , action)=>{
            state.numberOfIceCream+= action.payload;
        }
    }
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;

