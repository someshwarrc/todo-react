import React from "react";

function TodoForm({ input, setInput, handleSubmit }) {
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="TodoFormInput"
        value={input}
        onChange={handleInput}
        placeholder="Type a task and press enter.."
      ></input>
      <button type="submit" className="TodoFormSubmitBtn"></button>
    </form>
  );
}

export default TodoForm;
