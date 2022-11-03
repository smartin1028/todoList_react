import TodoHeader from "./TodoHeader";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";
import {Todo} from "../App";

interface Props {
    readonly input: string;
    readonly todos: Todo[];
    readonly onRemove: (id: number) => void;
    readonly onToggle: (id: number) => void;
    readonly onClearAll: () => void;
    readonly onInsert: (input: string) => void;
    readonly onChangeInput: (input: string) => void;
}

const Todos = ({
    input,
    todos,
    onChangeInput,
    onInsert,
    onToggle,
    onRemove,
    onClearAll
}: Props)=>{
    return (
        <div>
            <TodoHeader/>
            <TodoInput input={input} onInsert={onInsert} onChangeInput={onChangeInput}/>
            <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
            <TodoFooter onClearAll={onClearAll}/>
        </div>
    )
}


//
//
// //액션 타입
// const CHANGE_TODO_INPUT = "CHANGE_TODO_INPUT" as const;
// const ADD_TODO = "ADD_TODO" as const;
// const TOGGLE_TODO_STATUS = "TOGGLE_TODO _STATUS" as const;
// const REMOVE_TODO = "REMOVE_TODO" as const;
// const CLEAR_ALL_TODOS = "CLEAR_ALL_TODOS" as const;
// // 액션 생성 함수
// export const changeTodoInput = (input: string) => ({
//     type: CHANGE_TODO_INPUT, input,
// });
// export const clearAllTodos = () => ({type: CLEAR_ALL_TODOS});
// // 상태 인터페이스 정의
// export interface TodoState {
//
// }
// // 초기상태
// const initialState: TodoState = {
//     input: "", todos: [], nextTodold: 1,
// };
//
// // 액션 타입 정의
// type TodoAction =
// //
//     | ReturnType <typeof clearAllTodos>;
//
// //리듀서 함수 정의
// function todos(state: TodoState = initialState, action: TodoAction) {
//     switch (action.type) {
//         case CHANGE_TODO_INPUT.valueOf() :
//             return {
//                 ...state,
//                 input: action.input,
//             };
//         default :
//             return state;
//     }
//
// //
// //
// //     switch (action.type) {
// //         case CHANGE_TODO_INPUT:
// //             return {
// //                 ...state,
// //                 input: action.input,
// //             };
// // // ...
// //         default:
// //             return state;
// //     }
// }
//
// const Todos = () =>{
//
//     return(
//         <TodoProvider>
//             <div>11</div>
//             <TodoHeader/>
//             <TodoInput/>
//             <TodoList/>
//             <TodoFooter/>
//         </TodoProvider>
//     )
// }
export default Todos;