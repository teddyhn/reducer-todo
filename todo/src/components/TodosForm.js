import React, { useReducer, useState } from "react";
import { initialState, Reducer } from "../reducers/Reducer";

import Todos from "./Todos";

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
                <Todos
                    key={todo.id}
                    todo={todo.item}
                    index={state.indexOf(todo)} 
                    item={state} 
                    val={todo.id}
                />
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