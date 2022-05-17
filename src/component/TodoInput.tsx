import styles from "../Todo.module.css";
import React, {useState} from "react";
import {TodoConsumer} from "../context/todo";

const TodoInput = () => {
    const placeholder = "할 일을 입력하세요";
    return (
        <TodoConsumer>
            {
                (value) => (
                    <div className={styles.input}>
                        <form onSubmit={value.actions.handleSubmit}>
                            <input placeholder={placeholder} value={value.state.input}
                                   onChange={value.actions.handleChange}/>
                            <button type="submit">추가</button>
                        </form>
                    </div>
                )
            }
        </TodoConsumer>
    );
}

export default TodoInput;