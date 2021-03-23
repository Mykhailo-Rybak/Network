import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id} />  );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> );

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
        values.newMessageBody = ''
    }

    if (!props.isAuth) return <Redirect to={"/login"} /> ;

    return (
        <div className='dialogs__page'>
            <div className='dialogs__users' >
                { dialogsElements }
            </div>
            <div className='dialogs__messages' >
                <div>{ messagesElements }</div>
                <AddMessageForm onSubmit={addNewMessage} />
            </div>

        </div>
    )
}

export default Dialogs;

























