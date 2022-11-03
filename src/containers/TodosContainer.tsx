import React from "react";
//connect 함수 임포트
import {connect} from "react-redux";
//액션 생성 함수 임포트
import {
    changeTodoInput,
    addTodo,
    toggleTodoStatus,
    removeTodo,
    clearAllTodos,
} from "../modules/todos";

//Todos 컴포넌트 임포트
import Todos from "../components/Todos";
//상태 인터페이스 임포트
import {TodoState} from "../modules/todos";
// Dispatch 함수 타입 임포트
import {Dispatch} from 'redux';

// 타입스크립트 타입 정의
type PropsState = ReturnType<typeof mapStateToProps>;
type PropsDispatch = ReturnType<typeof mapDispatchToProps>;

// props 타입 스크립트 인터페이스 정의
interface Props extends PropsState, PropsDispatch {}

// connect 함수에 의해 상태와 스토어 상태 변경 함수를 props로 전달받음
const TodosContainer = (
    {
        input,
        todos,
        changeTodoInput,
        addTodo,
        toggleTodoStatus,
        removeTodo,
        clearAllTodos,
    }: Props) => {
    // Todos 컴포넌트에 props로 전달
    return (
        <Todos input={input}
               todos={todos}
               onChangeInput={changeTodoInput}
               onInsert={addTodo}
               onToggle={toggleTodoStatus}
               onRemove={removeTodo}
               onClearAll={clearAllTodos}
        />
    );
};
// 스토어 상태를 props로 매핑
const mapStateToProps = (state: TodoState) => ({
    input: state.input,
    todos: state.todos,
});
// 스토어 상태 변경 함수를 props로 매평
const mapDispatchToProps = (dispatch: Dispatch) => ({
    changeTodoInput: (input: string) => dispatch(changeTodoInput(input)),
    addTodo: (input: string) => dispatch(addTodo(input)),
    toggleTodoStatus: (id: number) => dispatch(toggleTodoStatus(id)),
    removeTodo: (id: number) => dispatch(removeTodo(id)),
    clearAllTodos: () => dispatch(clearAllTodos()),
});
//리덕스와 연동된 컴포넌트 반환
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodosContainer);