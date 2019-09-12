import React, { useReducer, useState } from "react";
import { initialState, Reducer } from "../reducers/Reducer";

import moment from "moment";

const TodosForm = () => {
    const [newTodo, setNewTodo] = useState("");
    const [state, dispatch] = useReducer(Reducer, initialState);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    console.log(state);

    return (
        <>
            <div className="todos-list">
                {state.map(todo => (
                    <div
                        className={`item${todo.completed ? ' completed' : ''}`}
                        onClick={() => {
                            dispatch({ type: "TOGGLE_COMPLETED", id: todo.id });
                            console.log(todo)
                        }}
                        key={todo.id}
                    >
                        <h4>{todo.item}</h4>
                        <p>{`${todo.completed ? `Completed: ${moment(new Date()).format('MMMM Do YYYY, h:mm a')}` : ''}`}</p>
                    </div>
                ))}
            </div>
            <div className="todos-form">
                <input
                    className="todo-input"
                    type="text"
                    name="newTodo"
                    value={newTodo}
                    onChange={handleChanges}
                />
                <button
                    onClick={() => {
                        dispatch({ type: "ADD_NEWTODO", payload: newTodo });
                    }}
                >
                    Add new todo
                </button>
                <button
                    onClick={() => {
                        dispatch({ type: "CLEAR_COMPLETED" });
                    }}
                >
                    Clear completed
                </button>
            </div>
        </>
    )
}

export default TodosForm;