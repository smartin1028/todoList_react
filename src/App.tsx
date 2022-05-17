import React from 'react';
import Todos from "./component/Todos";
export interface Todo {
    id: number;
    text: String;
    done: boolean;
}

function App() {
  return (
    <div>
      <Todos/>
    </div>
  );
}

export default App;

