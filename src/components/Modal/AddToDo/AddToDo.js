import React from 'react';
import classes from './AddToDo.module.css';
import { tsPropertySignature } from '@babel/types';

const addToDo = (props) => (
    <div className={classes.Addbtn} onClick={props.add}>Add</div>
)

export default addToDo;