import React from 'react';
import classes from './ToDoPrompt.module.css';

const toDoPrompt = (props) => (
    <div className={classes.AddBtn} onClick={props.click}>+</div>
)

export default toDoPrompt;