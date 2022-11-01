import styles from "../Todo.module.css";
import TodoContext from "../context/todo";
import {useContext} from "react";


const TodoFooter = () => {
    const {actions} = useContext(TodoContext);
    return (
        <div className={styles.footer}>
            <button onClick={() => actions.handleClearAll()}>모두 삭제</button>
        </div>
    );

};
export default TodoFooter;