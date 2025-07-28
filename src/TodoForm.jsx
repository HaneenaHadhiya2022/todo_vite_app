// src/TodoForm.jsx
import React, { useState } from "react";

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        value={value}
        placeholder="New Item"
        onChange={(e) => setValue(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Add</button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "300px",
    marginBottom: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #444",
    backgroundColor: "#fff",
    color: "#000",
  },
  button: {
    padding: "10px",
    width: "310px",
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #444",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default TodoForm;
