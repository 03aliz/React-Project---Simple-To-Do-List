import React from 'react';
import ToDoItem from './ToDoItem/ToDoItem';


const toDoList = (props) => {
    const toDoItems = props.items.map((val,index) => {
        return <ToDoItem key={index} item={val} delete={() => props.deleteItem(index)} />
    });

    return (
        <div>
            {toDoItems}
        </div>
    )   
}

export default toDoList;