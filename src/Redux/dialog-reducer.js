const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let inicialState = {
    dialogs: [
        {name: "Artem", id: "1"},
        {name: "Andrey", id: "2"},
        {name: "Serge", id: "3"},
        {name: "Stepan", id: "4"},
        {name: "Ananim", id: "5"}
    ],
    message: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "YoyoYo"},
        {id: 4, message: "How are you"}
    ],
    newMessageBody: ""
};

const dialogReducer = (state = inicialState, action) => {

    let stateCopy;

    switch (action.type) {

        case 'UPDATE_NEW_MESSAGE_BODY':

            return  {
                ...state,
                newMessageBody: action.body
                };

        case 'SEND_MESSAGE':
            let body = state.newMessageBody;
            return  {
                ...state,
                message: [...state.message, {id: 5, message: body}],
                newMessageBody: ''
            };

        default:
            return state
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMassageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});

export default dialogReducer;