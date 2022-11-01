import TodoItem from "./TodoItem"
import styles from "../Todo.module.css";
import TodoContext, {TodoConsumer} from "../context/todo";
import {useContext} from "react";

const TodoList = () => {

    const {state, actions} = useContext(TodoContext);
    return (
        <div className={styles.list}>
            {state.todos.map((todo) => (
                    <TodoItem todo={todo}
                              key={todo.id}
                              onRemove={actions.handleRemove}
                              onToggle={actions.handleToggle}
                    />
                )
            )}
        </div>

    );


};

export default TodoList;