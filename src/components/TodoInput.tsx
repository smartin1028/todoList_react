import styles from "../Todo.module.css";
import React, {useContext} from "react";
import TodoContext from "../context/todo";

/**
 * Consumer 컴포넌트를 사용하는 대신에 컨텍스트 훅을 사용한다.
 * @constructor
 */

interface Props {
    readonly input: string;
    readonly onInsert: (input: string) => void;
    readonly onChangeInput: (input: string) => void;
}
const TodoInput = ({input, onInsert, onChangeInput}: Props) => {
    const placeholder = "할 일을 입력하세요";
    // form submit 이벤트 처리함수
    const onSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        onInsert(input);
        onChangeInput("");
    }

    // 텍스트 입력 요소 변경 이벤트 처리함수
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => onChangeInput(e.target.value);

    return (
        <div className={styles.input}>
            <form onSubmit={onSubmit}>
                <input
                    placeholder={placeholder}
                    value={input}
                    onChange={onChange}
                />
                <button type="submit">추가</button>
            </form>
        </div>
    )
}

export default TodoInput;