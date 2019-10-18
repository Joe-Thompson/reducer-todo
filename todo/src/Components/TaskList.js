import React, { useReducer } from "react";
import { reducer, initState } from "../Reducers/reducers";
import Task from "./Task";
import TaskForm from "./TaskForm";

const TaskList = () => {

    const [state, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            {state.map(todo => {
                return <Task key={todo.id} todo={todo} dispatch={dispatch} />
            })}
            <TaskForm dispatch={dispatch} />
        </div>
    )
};

export default TaskList;