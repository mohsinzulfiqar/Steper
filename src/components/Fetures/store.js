import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./formSlice/formSlice"
export const store = configureStore({
    reducer: {
        steper:formSlice
    }
})