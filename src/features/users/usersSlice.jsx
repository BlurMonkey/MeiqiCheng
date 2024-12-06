import { createSlice } from "@reduxjs/toolkit";

// Import the createSlice function from Redux Toolkit to create a slice for users

// Define the initial state with three example users
const initialState = [
    { id: '0', name: 'Bob' },
    { id: '1', name: 'Maggie' },
    { id: '2', name: 'Tom' }
]

// Create a slice for users
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

// Define a selector function to retrieve all users from the Redux Store
export const selectAllUsers = (state) => state.users;

// Export the slice's reducer
export default usersSlice.reducer