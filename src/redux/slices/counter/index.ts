import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({

    initialState: 0,
    name: 'counter',
    reducers: {
        increment: (state) => asdf(state),
        decrement: (state) => state - 1
    }
})

export const {increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;

    
const asdf = (state: number) => {
    return state + 1;
}