import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ITodo } from "./ITodo";


export const fetchTodos = createAsyncThunk('fetchTodos', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    return response.json();
});

export const todoSlice = createSlice({
    initialState: {
        isLoading: false,
        data: null as ITodo[] | null,
        isError: false,
    },
    name: 'todo',
    reducers:{
        
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(fetchTodos.rejected, (state, action) => {
            console.log('Error', action.payload);
            state.isError = true;
        })
        
    }
})

export default todoSlice.reducer;