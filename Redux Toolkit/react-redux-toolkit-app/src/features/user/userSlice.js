import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    users: [],
    error: ""
}

// Todo : generates pending , fulfilled and rejected action types!!
// ! this is an async action creator
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    try {
        let response = await axios.get("https://jsonplaceholder.typicode.com/users");
        let userArray = response.data.map(elem => elem.name);
        return userArray;
    }
    catch (error) {
        return error.message;
    }
})


const userSlice = createSlice({
    name: "userSlice",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
            state.error = "";
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.error = "something is wrong here";
        })
    }
})

export default userSlice.reducer;
