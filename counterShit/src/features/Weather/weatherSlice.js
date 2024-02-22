import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    response: [],
    error: "",
}

// creating a asyncthunk actions creator 
export const fetchInfo = createAsyncThunk("fetchInfo", async (element) => {
    console.log("from the async : ", element);
    try {
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${element}&appid=605b5adc1b1f5d216518eb1c953c563d`);
        console.log("responding : " ,response.data);
        return response.data;
    }
    catch (error) {
        return error;
    }
})


const weatherSlice = createSlice({
    name: "weatherSlice",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchInfo.pending, (state) => {
            console.log("I am here 1")
            state.loading = true;
            return state;
        })
        builder.addCase(fetchInfo.fulfilled, (state, action) => {
            console.log("I am here 2")
            state.loading = false;
            state.response = action.payload;
            state.error = "";
            return state;
        })
        builder.addCase(fetchInfo.rejected, (state, action) => {
            console.log("I am here 3")
            state.loading = false;
            state.response = [];
            state.error = action.error.message;
            return state;
        })
    }
})

export default weatherSlice.reducer;