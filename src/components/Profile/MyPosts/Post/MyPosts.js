import React from "react";
import pro from './MyPosts.module.css';
import Post from "./Post";


const MyPosts = (props) => {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };

    return (
        <div className={pro.content}>
            <div className={pro.postsBlock}>
                <h3>New posts</h3>
                <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add text</button>
                </div>
                <div className={pro.posts}>
                    {postElements}
                </div>
            </div>


        </div>
    )
}
export default MyPosts;