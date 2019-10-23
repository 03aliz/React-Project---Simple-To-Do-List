import React, { Component } from 'react';
import ToDoPromptBtn from '../../components/ToDoPrompt/ToDoPrompt';
import Aux from '../../hoc/Auxilary/Auxilary';
import ToDoList from '../../components/ToDoList/ToDoList';
import Modal from '../../components/Modal/Modal';
import Backdrop from '../../components/Backdrop/Backdrop';
import { thisTypeAnnotation } from '@babel/types';

class Display extends Component  {

    state = {
        toDoItems: [],
        toDoItem:'',
        showModal:false
    }

    changeToDoItemHandler = (e) => {
        
        this.setState({toDoItem:e.target.value});
        
    }

    addToDoItemHandler = (event) => {
     console.log(event.key);
        if (this.state.toDoItem.length > 0) {
        let toDoItems = [...this.state.toDoItems];
        toDoItems.push(this.state.toDoItem);
        this.setState({
            toDoItems:toDoItems,
            toDoItem:'',
            showModal:false
        });
    }

    }

    keyPressEventHandler = (event) => {

        if (this.state.toDoItem.length > 0 && event.key === 'Enter') {
            let toDoItems = [...this.state.toDoItems];
            toDoItems.push(this.state.toDoItem);
            this.setState({
                toDoItems:toDoItems,
                toDoItem:'',
                showModal:false
            });
        }
    }

    deleteToDoItemHandler = (itemIndex) => {
        let toDoItems = [...this.state.toDoItems];
        toDoItems.splice(itemIndex,1);
        this.setState({toDoItems:toDoItems});
    }

    showModalHandler = () => {
        this.setState({showModal:true});
    }

    hideModalHandler = () => {
        this.setState({showModal:false});
    }


        render () {

            return (

                <Aux>
                   <Backdrop 
                    show={this.state.showModal} 
                    click={this.hideModalHandler} />
                   <ToDoPromptBtn click={this.showModalHandler} />
                   <Modal 
                    show={this.state.showModal} 
                    changeVal={this.changeToDoItemHandler}
                    addItem={this.addToDoItemHandler} 
                    keypress={this.keyPressEventHandler}/>
                   <ToDoList 
                    items={this.state.toDoItems} 
                    deleteItem={this.deleteToDoItemHandler}/>
                   
                </Aux>
            )
        }
        
   
    }

export default Display;