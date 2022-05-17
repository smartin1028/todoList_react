import styles from "../Todo.module.css";
import React, {useState} from "react";
interface Prop{
    readonly onInsert: (value: string) => void;

}

const TodoInput = ({onInsert}:Prop) => {
    const [todoValue, setTodoValue] = useState("")

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setTodoValue(e.target.value);
    }
    const handleSummit = (e:React.FormEvent<HTMLFormElement>) => {
        // submit 이벤트 방지하기 위해 호출
        e.preventDefault();
        onInsert(todoValue);
        setTodoValue("")
    }

    return (
        <div className={styles.input}>
            <form onSubmit={handleSummit}>
                <input placeholder="할 일을 입력하세요" value={todoValue} onChange={handleChange}/>
                <button type="submit" >추가</button>
            </form>
        </div>
    );

};
export default TodoInput;