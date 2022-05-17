import TodoItem from "./TodoItem"
import styles from "../Todo.module.css";
import {Todo} from "../App";
import {TodoConsumer} from "../context/todo";

//
// interface Props{
//     readonly todos: Todo[];
//     readonly onRemove: (id: number) => void;
//     readonly onToggle: (id: number) => void;
// }
//
// const TodoList = ({todos,onRemove, onToggle}:Props) => {
//     return (
//         <div className={styles.list}>
//             {todos.map((todo) => (
//                 <TodoItem
//                     todo={todo}
//                     key={todo.id}
//                     onRemove={onRemove}
//                     onToggle={onToggle}
//                 />
//             ))}
//         </div>
//     );
// };

const TodoList = () => {

    return (
        <TodoConsumer>
            {(value) => (
                <div className={styles.list}>
                    {value.state.todos.map((todo) => (
                            <TodoItem todo={todo} key={todo.id} onRemove={value.actions.handleRemove}
                                      onToggle={value.actions.handleToggle}/>
                        )
                    )}
                </div>
            )}

        </TodoConsumer>
    );


};

export default TodoList;