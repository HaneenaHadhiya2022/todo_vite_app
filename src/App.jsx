import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function App() {
  const [todos, setTodos] = useState([
    // Initial todos can be added here, e.g. { text: "Sample Todo", isDone: false }
  ]);

  const addTodo = (text) => {
    setTodos([...todos, { text, isDone: false }]);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = !newTodos[index].isDone;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={styles.app}>
      <h1>📝 To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <div>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            markTodo={markTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  app: {
    maxWidth: "500px",
    margin: "40px auto",
    textAlign: "center",
    fontFamily: "Arial",
  },
};

export default App;
