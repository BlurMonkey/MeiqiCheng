import { useDispatch } from "react-redux";
import React from "react";
import { reactionAdded } from "./postSlice.jsx";
import './PostList.css';

// Import Redux's useDispatch hook for dispatching actions and the style file

// Define a mapping of reaction names to emojis
const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch(); // Get the dispatch function
    // Iterate over the reaction emojis and generate buttons
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        // Correct typing for the reaction name

        return (
            <button
                key={name}
                type="button"
                className="reactionButton"
                onClick={() =>
                    dispatch(reactionAdded({ postId: post.id, reaction: name }))
                }
            >
                {emoji} {post.reactions[name]}
            </button>
        );
    });

    return <div>{reactionButtons}</div>;  // Return the generated buttons
};

export default ReactionButtons;