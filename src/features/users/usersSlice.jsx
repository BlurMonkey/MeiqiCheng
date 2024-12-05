import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Bob' },
    { id: '1', name: 'Maggie' },
    { id: '2', name: 'Tom' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer