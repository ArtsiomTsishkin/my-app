    import React from "react";
    import pro from './ProfileInfo.module.css';
    import Preloader from "../../common/Preloader/Preloader";
    import Profile from "../Profile";
    import ProfileStatus from "./ProfileStatus";


    const ProfileInfo = (props) => {

        if (!props.profile) {
           return <Preloader/>
        }


        return (
            <div>
              
                <div className={pro.descriptionBlock}>
                    <img src={props.profile.photos.large} />
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        )
    }
    export default ProfileInfo;