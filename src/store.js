import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiSlice, commentsAPI, productAPI } from './Services/API';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        [productAPI.reducerPath]: productAPI.reducer,
        [commentsAPI.reducerPath]: commentsAPI.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware, productAPI.middleware, commentsAPI.middleware),
});

setupListeners(store.dispatch);