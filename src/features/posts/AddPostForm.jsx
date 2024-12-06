import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postSlice.jsx";
import { selectAllUsers } from "../users/usersSlice.jsx";
import "./AddPostForm.css";

// Import React hooks, Redux functions, and styles

const AddPostForm= () => {
    const dispatch = useDispatch();// Used to dispatch Redux actions

    // Local state management for title, content, and user ID
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    // Select all users from Redux Store
    const users = useSelector(selectAllUsers);
    
    // Handlers for input changes in title, content, and author ID
    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);

    // Handler for saving a new post
    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdded(title, content, userId)
            ); // Ensure postAdded accepts an object
            setTitle('');// Ensure postAdded accepts the correct object
            setContent('');// Reset the content
        };
    }

    // Validation to check if the post can be saved
    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

   // Generate user options for the dropdown
    const usersOptions = users.map(user => (
        <option key={user.id} value ={user.id}> 
            {user.name}
        </option>
    ));

    return (
         // Main container section for adding a new post
        <section className="add-post">
            <h2>Add a New Post</h2>
            {/* Form section */}
            <form className="add-post-form">
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                {/* Author selection section */}
                <label htmlFor="postAuthor">Author:</label>
                <select className="author" id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value="">Select an author</option>
                    {usersOptions}
                </select>
                {/* Content input section */}
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                {/* Save button */}
                <button
                    type="button"
                    onClick={onSavePostClicked}
                    disabled={!canSave}
                >
                    Save Post
                </button>
            </form>
        </section>
    );
}

export default AddPostForm;