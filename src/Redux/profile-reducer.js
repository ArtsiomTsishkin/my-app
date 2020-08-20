import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD - POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let inicialState = {
    posts: [
        {id: 1, message: 'Hi, are you?', likesCount: '10'},
        {id: 2, message: 'What do you do?', likesCount: '14'},
        {id: 3, message: 'Zazazaza?', likesCount: '17'},
        {id: 4, message: 'Yoyoyo!!!', likesCount: '19'}
    ],
    newPostText: 'Pisulalala',
    profile: null,
    status: ""
}

const profileReducer = (state = inicialState, action) => {

    switch (action.type) {
        case 'ADD - POST': {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: '0'
            };
            return  {
                ...state,
                posts :[...state.posts, newPost],
                newPostText:''
            };
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
                return  {
                    ...state,
                    profile: action.profile
                }
        }
        case SET_STATUS: {
                return  {
                    ...state,
                    status: action.status
                }
        }
        default:
            return state
    }
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUsersProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId).then(response => {
        dispatch(setUsersProfile(response.data));
    })
};

export const getStatus = (userId) => (dispatch) => {
   profileAPI.getStatus(userId)
       .then(response => {
        dispatch(setStatus(response.data));
    })
};
export const updateStatus = (status) => (dispatch) => {
   profileAPI.updateStatus(status)
       .then(response => {
       if(response.data.resultCode === 0) {
           dispatch(setStatus(status));
       }
    })
};
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;