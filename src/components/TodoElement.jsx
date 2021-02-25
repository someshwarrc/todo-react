import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";

function TodoElement({ todo, handleDelete }) {
  const [complete, setComplete] = useState(false);

  const handleComplete = () => {
    setComplete(!complete);
  };

  const handleDeleteWrapper = (e) => {
    e.stopPropagation();
    handleDelete(todo.id);
  };

  return (
    <div
      className={complete ? "TodoElement complete" : "TodoElement"}
      onClick={handleComplete}
    >
      <span className="TodoText" tooltip="Mark as Complete/Incomplete">
        {todo.todo}
      </span>
      <BsFillTrashFill className="TodoDelete" onClick={handleDeleteWrapper} />
    </div>
  );
}

export default TodoElement;
