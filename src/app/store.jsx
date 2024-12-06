import { configureStore } from "@reduxjs/toolkit";
import postsReducer from '../features/posts/postSlice.jsx';
import usersReducer from '../features/users/usersSlice.jsx';

// Import the configureStore function from Redux Toolkit and reducers for posts and users
// Configure the Redux Store
export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    }
})
