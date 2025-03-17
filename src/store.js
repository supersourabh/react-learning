import { configureStore, createSlice, createStore } from "@reduxjs/toolkit";
import { fetchReducer } from "./fetchReducer";

const slice = createSlice(
    {
        name : "test app",
        initialState: {
            data: null
        },
        reducers: {
            testFetch: fetchReducer
        }
    }
)

const store = configureStore({
    reducer: slice.reducer
})

export default store ;