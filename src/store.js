import { configureStore } from "@reduxjs/toolkit";
import { billReducer } from "./reducer";

export const store = configureStore({
	reducer: {
		bills: billReducer,
	},
});