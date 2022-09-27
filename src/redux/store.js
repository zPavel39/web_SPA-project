import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket/basketSlice"
import userReducer from "./user/userSlice"

export const store = configureStore({
    reducer: {
        basket: basketReducer,
        user: userReducer,
    },
})