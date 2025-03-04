import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './features/todoSlice'
// import { baseApi } from './api/api';
export const store = configureStore({
    reducer: {
        // [baseApi.reducerPath]: baseApi.reducer,
        todos: todoSlice,
    },
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware().concat(baseApi.middleware),
})
