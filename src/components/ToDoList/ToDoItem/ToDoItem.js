import React from 'react';
import DeleteItem from '../DeleteItem/DeleteItem';
import classes from './ToDoItem.module.css';

const toDoItem = (props) => (
    <div className={classes.ItemContainer}>
        <p>{props.item}</p>
        <DeleteItem deleted={props.delete}> X </DeleteItem> 
    </div>
)

export default toDoItem;