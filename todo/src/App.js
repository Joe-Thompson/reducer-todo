import React from 'react';
import './App.css';
import TaskList from "./Components/TaskList"

function App() {
    return (
        <div className="App">
            <h1 className='Title'>Reducer Todo App</h1>
            <TaskList />
        </div>
    );
}

export default App;