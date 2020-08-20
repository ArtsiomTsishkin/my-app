import React from "react";
import dia from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";



const Dialogs = (props) => {
    let state = props.dialogPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)

    let messagesElements = state.message.map(m => < Message message={m.message}  key={m.id}/>)
    let newMessagesBody =state.newMessageBody;


  let onSendMessageClick = () => {
      props.sendMessage()
  }
  let onNewMessageChange = (e) => {
let body = e.target.value;
props.updateNewMassageBody(body);

  }

if (!props.isAuth) return <Redirect to={"/login"}/>;
    return (
        <div className={dia.dialogs}>

            <div className={dia.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={dia.messages}>


                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={ newMessagesBody}
                    placeholder= 'Enter your message'
                        onChange={onNewMessageChange}
                    > </textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>

        </div>
    )

}
export default Dialogs;