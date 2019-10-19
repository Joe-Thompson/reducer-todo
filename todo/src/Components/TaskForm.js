import React, { useState } from "react";

 const TaskForm = ({dispatch}) => {
    const [item, setItem] = useState("");

    const handleChanges = event => {
        setItem(event.target.value);
    };

    const submitForm = event => {
        event.preventDefault();
        dispatch({
            type: "ADD_TASK",
            payload: item
        });
        setItem("");
    };

    const clearCompleted = event => {
        event.preventDefault();
        dispatch({
            type: "CLEAR_COMPLETED"
        });
    };

    return (
        <div>
            <form onSubmit={submitForm}>
                <input  name="task"
                        className='Input'
                        placeholder='Please add task...'
                        onChange={handleChanges}
                        value={item}
                />
                <button className='Input'>Add Task</button>
                <button className='Input' onClick={clearCompleted}>Clear Completed Tasks</button>
            </form>
        </div>
    );
};

 export default TaskForm;