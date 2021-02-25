import React from "react";
import { GoTasklist } from "react-icons/go";

function TodoHeader() {
  return (
    <div className="TodoHeader">
      <span className="TodoHeaderText">What are you planning!? </span>
      <GoTasklist className="TodoHeaderIco" />
    </div>
  );
}

export default TodoHeader;
