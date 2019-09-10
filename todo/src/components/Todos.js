import React from 'react';

const Todos = props => {
    return (
        <div>
            <p>{props.todo.item}</p>
        </div>
    )
}

export default Todos;