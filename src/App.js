import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let storedTodos = localStorage.getItem("todos");

    // if localstorage has no such entry, JSON parse would return null which would give error in
    // next if statement [TYPEERR No length property of null]
    if (storedTodos !== null) {
      storedTodos = JSON.parse(storedTodos);
    } else {
      // JSON parse null would return null
      storedTodos = [];
    }

    if (storedTodos.length > 0) {
      // stored todos found in localstorage
      setTodos(storedTodos);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) {
      // if no input and submitted
      setInput("");
      return;
    }
    let todo = {
      id: (Math.floor(Math.random() * 1000) * Date.now()).toString(16),
      todo: input,
    };

    setInput("");
    setTodos([todo, ...todos]);

    localStorage.setItem("todos", JSON.stringify([todo, ...todos]));
  };

  const handleDelete = (id) => {
    let filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    localStorage.setItem("todos", JSON.stringify(filteredTodos));
  };

  return (
    <div className="App">
      <TodoHeader />
      <TodoForm input={input} setInput={setInput} handleSubmit={handleSubmit} />
      <TodoList todos={todos} setTodos={setTodos} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
