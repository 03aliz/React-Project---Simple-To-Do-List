import React from 'react';
import Display from './containers/ToDoDisplay/ToDoDisplay';
import classes from './App.module.css';

function App() {
  return (
    <div className={classes.App}>
        <header>
            <h1>To Do List</h1>  
        </header>
        <main>
          <Display />
        </main>


    </div>
  );
}

export default App;
