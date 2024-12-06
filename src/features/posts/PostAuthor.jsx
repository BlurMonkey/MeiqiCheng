import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice.jsx";

// Import Redux's useSelector hook and the user selector

const PostAuthor = ({ userId }) => {
    // Use useSelector to retrieve all users from the Redux Store
    const users = useSelector(selectAllUsers)
    // Find the author corresponding to the provided userId
    const author = users.find(user => user.id === userId);
    // Return the author's name, or "Unknown author" if not found
    return <span>by {author ? author.name : 'Unknown author'}</span>
}
export default PostAuthor