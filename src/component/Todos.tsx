import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import {useRef, useState} from "react";
import {Todo} from "../App";

const Todos = () => {
        const nextId = useRef(1);
        const [todos, setTodos] = useState<Todo[]>([]);

        const handleInsert = (text: string) => {
            const todo = {
                id: nextId.current,
                text,
                done: false
            }

            // setTodos(todos.concat(todo));

            // 성능 향상을 위해서 컴포넌트의 상태 변경을 함수형 업데이트 방식으로 바꾼다?
            // 함수형 업데이트
            setTodos((todos) => todos.concat(todo) );
            // setTodos((todos) => {return todos.concat(todo)});
            nextId.current += 1;
        }

        // const handleRemove = (id:number)

        const handleRemove = (id: number) => {
            function showLog() {
                console.log("====================1======================")
                console.log(todos.filter((todo) => todo.id !== id));
                console.log("====================2======================")
                console.log(todos.filter((todo) => todo.id === id));
                console.log("====================3======================")
            }

            showLog();

            // setTodos(todos.filter((todo) => todo.id !== id))

            setTodos((todos) => todos.filter((todo) => todo.id !== id))
        };
        const handleToggle = (id: number) => {
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

            function checkFunction() {
                let test
                todos.map((todo) => todo.id === id ? (test = {...todo, done: !todo.done}) : todo)
                console.log(test)
            }

               // data check 함수 결과 확인용
//             checkFunction();

        }

        const handleClearAll = () => {
            setTodos(()=>[]);
        }

        return (
            <div>
                <TodoHeader></TodoHeader>
                <TodoInput onInsert={handleInsert}></TodoInput>
                <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle}/>
                <TodoFooter onClearAll={handleClearAll}></TodoFooter>
            </div>
        )
    }
;

export default Todos;