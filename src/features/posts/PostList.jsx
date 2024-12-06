import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice.jsx";
import PostAuthor from "./PostAuthor.jsx";
import TimeAgo from "./TimeAgo.jsx";
import ReactionButtons from "./ReactionButton.jsx";
import './PostList.css';

// Import Redux hooks, selectors, and child components

const PostsList = () => {
    // Use useSelector to retrieve all posts from the Redux Store    
    const posts = useSelector(selectAllPosts)
    // Sort posts by date in descending order
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    // Map over the sorted posts to render each post
    const renderedPosts = orderedPosts.map(post => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <p className="postCredit">
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    ))
    
    // Return the structure for the posts list
    return (
        <section className="postsListContainer">
            <h2>Posts</h2>
            <div className="postsList">
                {renderedPosts}
            </div>
        </section>
        
    )
}
export default PostsList