    import React from "react";
    import MyPosts from "./MyPosts/Post/MyPosts";
    import ProfileInfo from "./ProfaleInfo/ProfileInfo";
    import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";

    const Profile = (props) => {

        return (

            <div>
                <ProfileInfo profile={props.profile}  status={props.status} updateStatus={props.updateStatus}/>
                <MyPostsContainer />
            </div>
        )
    }
    export default Profile;