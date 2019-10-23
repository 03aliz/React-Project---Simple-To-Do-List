import React from 'react';
import UserInput from './UserInput/UserInput';
import AddToDo from './AddToDo/AddToDo';
import classes from './Modal.module.css';

const modal = (props) => {
    return (
        props.show ? 
        <div className={classes.Modal}>
            <h3>Add your To Do Item</h3>
            <UserInput change={(e) => props.changeVal(e)} addingItem={props.keypress}/>
            <AddToDo add={props.addItem}/>
        </div> : null
    )
}

export default modal;

