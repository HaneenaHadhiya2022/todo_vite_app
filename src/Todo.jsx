// src/Todo.jsx
import React from "react";

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
    <div
      style={{
        ...styles.todo,
        textDecoration: todo.isDone ? "line-through" : "none",
        opacity: todo.isDone ? 0.6 : 1,
      }}
    >
      <span>{todo.text}</span>
      <div>
        <button onClick={() => markTodo(index)} style={styles.button}>✔</button>
        <button onClick={() => removeTodo(index)} style={styles.button}>✖</button>
      </div>
    </div>
  );
}

const styles = {
  todo: {
    background: "#222",
    color: "#fff",
    padding: "12px",
    margin: "8px 0",
    borderRadius: "10px",
    boxShadow: "0 1px 5px rgba(255,255,255,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    background: "#fff",
    color: "#000",
    border: "none",
    padding: "5px 10px",
    marginLeft: "8px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Todo;
