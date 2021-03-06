import React from "react";
import TodoElement from "./TodoElement";
function TodoList({ todos, setTodos, handleDelete }) {
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        return (
          <TodoElement todo={todo} handleDelete={handleDelete} key={todo.id} />
        );
      })}
    </div>
  );
}

export default TodoList;
