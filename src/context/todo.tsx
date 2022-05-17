import React, {createContext, useCallback, useRef, useState} from "react";
import {Todo} from "../App";

interface Prop{
    children: JSX.Element | JSX.Element[];
}

interface TodoState {
    readonly todos: Todo[];
    readonly input: string;
}

interface TodoAction {
    readonly setTodos: (todos: Todo[]) => void;
    readonly handleInsert: (text: string) => void;
    readonly handleRemove: (id: number) => void;
    readonly handleToggle: (id: number) => void;
    readonly handleClearAll: () => void;
    readonly handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    readonly handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

interface Context {
    readonly state: TodoState;
    readonly actions: TodoAction;
}

const TodoContext = createContext<Context>({
    state: {todos: [], input: ""},
    actions: {
        setTodos: (todos: Todo[]): void => {
        },
        handleInsert: (text: string): void => {
        },
        handleRemove: (id: number): void => {
        },
        handleToggle: (id: number): void => {
        },
        handleClearAll: (): void => {
        },
        handleChange: (e: React.ChangeEvent<HTMLInputElement>): void => {
        },
        handleSubmit: (e: React.FormEvent<HTMLFormElement>): void => {
        },
    },
});
const TodoProvider = ({children}:Prop) => {
    const nextId = useRef(1);
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState("");

    const handleInsert = useCallback((text: string) => {
        const todo = {
            id: nextId.current,
            text,
            done: false
        }
        setTodos((todos) => todos.concat(todo));
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

    // 상태와 업데이트 함수를 묶어 객체생성
    const value = {
        state: {todos, input},
        actions:{
            setTodos,
            handleInsert,
            handleRemove,
            handleToggle,
            handleClearAll,
            handleChange,
            handleSubmit,
        }
    }

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    // return <TodoContext.Provider value={value}

}
// todocontext의 Consumer 속성을 todoConsumer변수에 저장
const {Consumer: TodoConsumer} = TodoContext;

// todoProvider todoConsumer 내보내기
export {TodoProvider, TodoConsumer};

export default TodoContext;