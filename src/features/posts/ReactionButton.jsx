import { useDispatch } from "react-redux";
import React from "react";
import { reactionAdded } from "./postSlice.jsx";
import './PostList.css';

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();

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

    return <div>{reactionButtons}</div>;
};

export default ReactionButtons;