import { useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postSlice.jsx";
import { selectAllUsers } from "../users/usersSlice.jsx";
import "./AddPostForm.css";

const AddPostForm= () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');

    const users = useSelector(selectAllUsers);

    const onTitleChanged = (e) => setTitle(e.target.value);
    const onContentChanged = (e) => setContent(e.target.value);
    const onAuthorChanged = (e) => setUserId(e.target.value);

    const onSavePostClicked = () => {
        if (title && content && userId) {
            dispatch(postAdded({ title, content, userId })); // Ensure postAdded accepts an object
            setTitle('');
            setContent('');
            setUserId('');
        };
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

    const usersOptions = users.map(user => (
        <option key={user.id} value ={user.id}> 
            {user.name}
        </option>
    ));

    return (
        <section className="add-post">
            <h2>Add a New Post</h2>
            <form className="add-post-form">
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                <select className="author" id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value="">Select an author</option>
                    {usersOptions}
                </select>
                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
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