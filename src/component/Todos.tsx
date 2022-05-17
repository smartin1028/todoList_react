import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import React, {useCallback, useRef, useState} from "react";
import {Todo} from "../App";

const Todos = () => {
        const nextId = useRef(1);
        const [todos, setTodos] = useState<Todo[]>([]);
        const [input, setInput] = useState("");


        const handleInsert = useCallback((text: string) => {
            const todo = {
                id: nextId.current,
                text,
                done: false
            }

            // setTodos(todos.concat(todo));

            // 성능 향상을 위해서 컴포넌트의 상태 변경을 함수형 업데이트 방식으로 바꾼다?
            // 함수형 업데이트
            setTodos((todos) => todos.concat(todo));
            // setTodos((todos) => {return todos.concat(todo)});
            nextId.current += 1;
        }, []);

        const handleRemove = useCallback((id: number) => {

            console.log("====================1======================")
            console.log(todos.filter((todo) => todo.id !== id));
            console.log("====================2======================")
            console.log(todos.filter((todo) => todo.id === id));
            console.log("====================3======================")

            // setTodos(todos.filter((todo) => todo.id !== id))
            setTodos((todos) => todos.filter((todo) => todo.id !== id))
        }, []);

        const handleToggle = useCallback((id: number) => {
            // setTodos(
            //     todos.map((todo) =>
            //             todo.id === id ? {...todo, done: !todo.done} : todo
            //
            //             // if(todo.id === id) todo.done = !todo.done;
            //         // todo.id === id ? {...todo, done: !todo.done }
            //         // todo.id === id ? (...todo, done: !todo.done )
            //
            //     )
            // );

            setTodos((todos) =>
                todos.map((todo) => todo.id === id ? {...todo, done: !todo.done} : todo)
            );

            // data check 함수 결과 확인용
            let test
            todos.map((todo) => todo.id === id ? (test = {...todo, done: !todo.done}) : todo)
            console.log(test)


        }, []);

        const handleClearAll = useCallback(() => {
            setTodos(() => []);
        }, []);


        const handleChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
            setInput(e.target.value);
        }, []);
        const handleSubmit = useCallback((e:React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            handleInsert(input);
            setInput("");
        }, [handleInsert, input]);


        return (
            <div>
                <TodoHeader></TodoHeader>
                <TodoInput input={input} onChnage={handleChange} onSubmit={handleSubmit}></TodoInput>
                <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle}/>
                <TodoFooter onClearAll={handleClearAll}></TodoFooter>
            </div>
        )
    }
;

export default Todos;