import React from 'react';
import Aux from '../../../hoc/Auxilary/Auxilary';
import classes from './UserInput.module.css';
const userInput = (props) => (
    <Aux>
        <input autoFocus className={classes.Input} type="text" onChange={props.change} onKeyPress={props.addingItem} />
    </Aux>
)

export default userInput;