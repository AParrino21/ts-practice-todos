import React from 'react'

// allowing us to use props with interface syntax(same as type)
interface TodoListProps {
    items: { id: string, text: string }[];
    onDeleteTodo: (id: string) => void;
}

const ToDoList: React.FC<TodoListProps> = (props) => {

    return (
        <div>
            <ul>
                {props.items.map(todo => (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <button onClick={() => props.onDeleteTodo(todo.id)}>DELETE</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList