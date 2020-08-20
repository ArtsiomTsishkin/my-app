import React from "react";
import pro from './Post.module.css';

const Post = (props) => {
    return <div className={pro.content}>

        <div className={pro.item}>
            <img src="https://sun9-6.userapi.com/c306607/v306607903/2264/il4ljXVv5dM.jpg?ava=1"/>
            {props.message}
            <div>

                <span>

                    <button > Like </button> { props.likesCount }
                    </span>
            </div>
        </div>
    </div>;
}
export default Post;