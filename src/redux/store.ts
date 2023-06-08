import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slices/counter';
import todoReducer from './slices/todos/todo'

export const store = configureStore({
    reducer: {
        counter: counterSlice,
        todo: todoReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;