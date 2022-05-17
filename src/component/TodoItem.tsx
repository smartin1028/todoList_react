import styles from "../Todo.module.css";
import {Todo} from "../App";

interface Prop{
    readonly todo: Todo;
    readonly onRemove: (id: number) => void;
    readonly onToggle: (id: number) => void;
}


const TodoItem = ({todo,onRemove,onToggle}:Prop) => {

    const {id, text, done} = todo;
    const handleText = () => {
        return done ? "완료" : "";
    }

    return (
        <div className={styles.item}>
            <input type={"checkbox"} checked={done} onChange={()=>onToggle(id)}/>
            <span>{text}</span>
            <span> {handleText()}</span>
            <button onClick={()=>onRemove(id)}>삭제</button>
        </div>
    );


};
export default TodoItem;

