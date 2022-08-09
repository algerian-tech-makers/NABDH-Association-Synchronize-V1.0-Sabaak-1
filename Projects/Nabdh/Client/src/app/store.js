import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import slice from "../features/auth/slice";
import { nabdhApi } from "../features/ApiSlice/api-query";
export const store = configureStore({
	reducer: {
		authslice: slice,
		[nabdhApi.reducerPath]: nabdhApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(nabdhApi.middleware),
});

setupListeners(store.dispatch);
