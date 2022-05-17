import styles from "../Todo.module.css";
import React, {useState} from "react";
interface Prop{
    // readonly onInsert: (value: string) => void;
    readonly input: string;
    readonly onChnage: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readonly onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TodoInput = ({input, onChnage, onSubmit}:Prop) => {
    // const [todoValue, setTodoValue] = useState("")
    //
    // const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    //     setTodoValue(e.target.value);
    // }
    // const handleSummit = (e:React.FormEvent<HTMLFormElement>) => {
    //     // submit 이벤트 방지하기 위해 호출
    //     e.preventDefault();
    //     onInsert(todoValue);
    //     setTodoValue("")
    // }

    return (
        <div className={styles.input}>
            <form onSubmit={onSubmit}>
                <input placeholder="할 일을 입력하세요" value={input} onChange={onChnage}/>
                <button type="submit" >추가</button>
            </form>
        </div>
    );

};
export default TodoInput;