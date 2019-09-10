import React, { useReducer } from "react";
import { initialState, Reducer } from "../reducers/Reducer";

const Todos = ({ val, todo, index, item }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);

    return (
        <div
            className={`item${item[index].completed ? ' completed' : ''}`}
            onClick={() => {
                dispatch({ type: "TOGGLE_COMPLETED", id: val});
                console.log(item)
                console.log(index)
            }}
        >
            <p>{todo}</p>
        </div>
    )
}

export default Todos;