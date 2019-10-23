import React from 'react';
import Aux from '../../../hoc/Auxilary/Auxilary';


const deleteItem = (props) => (
    <Aux>
        <span onClick={props.deleted}> {props.children} </span>
    </Aux>
)

export default deleteItem;