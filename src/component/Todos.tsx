import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import React, {useCallback, useRef, useState} from "react";
import {Todo} from "../App";
import {TodoProvider} from "../context/todo";

const Todos = () =>{
    return(
        <TodoProvider>
            <div>11</div>
            <TodoHeader/>
            <TodoInput/>
            <TodoList/>
            <TodoFooter/>
        </TodoProvider>
    )
}
export default Todos;