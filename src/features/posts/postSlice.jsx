import {createSlice, nanoid} from "@reduxjs/toolkit";
import { sub } from "date-fns";

// Import Redux Toolkit's createSlice function, nanoid for unique IDs, and date-fns for date manipulation

// Define the initial state with two example posts
const initialState = [
    {id:'1', 
        title: 'Learning Redux Toolkit', 
        content:"I am XX",
        date:sub(new Date(), { minutes: 10 }). toISOString(),// Set post date to 10 minutes ago
        reactions:{ // Initialize reaction counts
            thumbsUp: 0,
            wow:0,
            heart:0,
            rocket:0,
            coffee:0
        }
    },
    {
        id:'2', 
            title: 'Slices...',
            content: "what I say",
            date:sub(new Date(), { minutes: 5 }). toISOString(),// Set post date to 5 minutes ago
            reactions:{ // Initialize reaction counts
                thumbsUp:0,
                wow:0,
                heart:0,
                rocket:0,
                coffee:0
            }
    }
]

// Create the posts slice
const postsSlice = createSlice ( {
    name:'posts', // Name of the slice
    initialState, // Initial state
    reducers:{
        // Define the action for adding a new post
       postAdded:{
            reducer(state, action){
                state.push(action.payload); // Push the new post to the state array
            },
            prepare(title, content, userId){ // Prepare function to generate action.payload
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        date: new Date(). toISOString(),
                        userId,
                        reactions:{
                            thumbsUp:0,
                            wow:0,
                            heart:0,
                            rocket:0,
                            coffee:0
                    }
                }
                }
            }
        },
        // Define the action for adding a reaction
        reactionAdded(state, action){
            
            const {postId, reaction}=action.payload // Destructure post ID and reaction type
            const existingPost = state.find(post=> post.id === postId) // Find the corresponding post
            if (existingPost){
                existingPost.reactions[reaction]++ // Increment the count for the specified reaction
            }
        }
    }
} );

// Export selector function to get all posts
export const selectAllPosts =(state) => state.posts;
// Export actions and reducer
export const { postAdded,reactionAdded} =postsSlice.actions;
export default postsSlice. reducer;