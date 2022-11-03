import TodosContainer from "./containers/TodosContainer";
export interface Todo {
    id: number;
    text: String;
    done: boolean;
}

function App() {
  return <TodosContainer />
}

export default App;

