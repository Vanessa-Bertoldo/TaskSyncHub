import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/rootReducer";
import { initializeValues } from "./storeCom";

const store = configureStore({
    reducer: rootReducer
})

const { dispatch } = store

initializeValues(dispatch, store)

export default store;

