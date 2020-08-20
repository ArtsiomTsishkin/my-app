import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, are you?', likesCount: '10'},
                {id: 2, message: 'What do you do?', likesCount: '14'},
                {id: 3, message: 'Zazazaza?', likesCount: '17'},
                {id: 4, message: 'Yoyoyo!!!', likesCount: '19'}
            ],
            newPostText: 'Pisulalala'
        },
        dialogPage: {
            dialogs: [
                {name: "Artem", id: "1"},
                {name: "Andrey", id: "2"},
                {name: "Serge", id: "3"},
                {name: "Stepan", id: "4"},
                {name: "Ananim", id: "5"}
            ],
            message: [
                {id:1, message: "Hi"},
                {id:2, message: "How are you"},
                {id:3, message: "YoyoYo"},
                {id:4, message: "How are you"}
           ],
         newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('Opa pa')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
// спросить почему такой this._state  а не state....?
        this._state.profilePage = profileReducer (this._state.profilePage, action);
        this._state.dialogPagePage = dialogReducer (this._state.dialogPage, action);
        this._state.sidebarPage = sidebarReducer (this._state.sidebarPage, action);
        this._callSubscriber(this._state);
    }
};
window.store = store;
export default store;