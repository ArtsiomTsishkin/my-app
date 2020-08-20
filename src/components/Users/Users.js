import React from 'react'
import styles from "./users.module.css";
import userPhoto from "../../assets/images/users.jpg";
import {NavLink} from "react-router-dom";
import u from "../../Redux/store";
import * as axios from "axios";
import {toggleFollowingProgress} from "../../Redux/users-reducer";
import {userAPI} from "../../api/api";


let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div>

        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}

        </div>
        {props.users.map(us => {
            return <div key={us.id}>

    <span>
        <div>
            <NavLink to={'/profile/' + us.id}>
            <img src={us.photos.small !== null ? us.photos.small : userPhoto} className={styles.userPfoto}/>
            </NavLink>
        </div>
        <div>
            {us.followed
                ? <button disabled={props.followingInProgress.some(id => id == us.id)}
                          onClick={() => {
                              props.unfollow(us.id)
                          }}>UNFOLLOW</button>
                : <button disabled={props.followingInProgress.some(id => id == us.id)}
                          onClick={() => {
                              props.follow(us.id)}}>FOLLOW</button>}
        </div>
    </span>
                <span>
         <span><div>{us.name}</div>
             <div>{us.status}</div>
         </span>
         <span>
             <div>{"us.location.country"}</div>
             <div>{"us.location.cite"}</div>
         </span>
    </span>
            </div>
        })}
    </div>
};
export default Users;