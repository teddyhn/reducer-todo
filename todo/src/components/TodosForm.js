import React, { useReducer, useState } from "react";
import { initialState, Reducer } from "../reducers/Reducer";

const TodosForm = () => {
    const [newTodo, setNewTodo] = useState("");
    const [state, dispatch] = useReducer(Reducer, initialState);

    const handleChanges = e => {
        setNewTodo(e.target.value);
    };

    console.log(state);

    return (
        <div>
            {state.map(todo => (
                <div
                    className={`item${todo.completed ? ' completed' : ''}`}
                    onClick={() => {
                        dispatch({ type: "TOGGLE_COMPLETED", id: todo.id });
                        console.log(todo)
                    }}
                    key={todo.id}
                >
                    <p>{todo.item}</p>
                </div>
            ))}
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
        </div>
    )
}

export default TodosForm;