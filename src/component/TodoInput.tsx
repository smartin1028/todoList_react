import styles from "../Todo.module.css";
import React, {useContext} from "react";
import TodoContext from "../context/todo";

/**
 * Consumer 컴포넌트를 사용하는 대신에 컨텍스트 훅을 사용한다.
 * @constructor
 */

const TodoInput = () => {
    const {state, actions} = useContext(TodoContext);
    const placeholder = "할 일을 입력하세요";

    return (
        <div className={styles.input}>
            <form onSubmit={actions.handleSubmit}>
                <input placeholder={placeholder} value={state.input}
                       onChange={actions.handleChange}/>
                <button type="submit">추가</button>
            </form>
        </div>
    )
}

export default TodoInput;