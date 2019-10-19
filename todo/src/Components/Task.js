import React from "react";

function Task({ todo: task, dispatch }){
    const toggleCompleted = () => {
        dispatch({
            type: "TOGGLE_COMPLETED",
            payload: task.id
        });
    };

    return(

        <div onClick={toggleCompleted}
             style={{ textDecoration: task.completed ? "line-through" : ""}}>
            <h2 className='Task'>{task.item}</h2>
        </div>
    );
}
export default Task;