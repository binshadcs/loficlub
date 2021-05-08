import { Button } from "@material-ui/core";
import React from "react";
import { BsCheckBox, BsTrash } from "react-icons/bs";

const Todo = ({ todo, deleteTodo, markAsCompleted }) => {
  return (
    <div className="w-[68%]  p-3 flex items-center justify-between bg-gradient-to-l from-[#000] to-[#11111198] border border-[#4CD2D6] rounded-md mt-2">
      <div className="relative flex items-center justify-start">
        <div
          className={`absolute duration-500 bg-green-400 h-1 ${
            todo.completed ? "w-full" : "w-[0px]"
          }`}
        ></div>
        <h2 className="text-2xl font-medium">{todo.name}</h2>
      </div>
      <div className="flex">
        <Button className="track flex" onClick={() => markAsCompleted(todo.id)}>
          <div className="flex items-center justify-center text-xl text-green-600 hover:text-green-400 duration-300">
            Completed
            <BsCheckBox className="ml-1" />
          </div>
        </Button>
        <Button className="track flex" onClick={() => deleteTodo(todo.id)}>
          <div className="flex items-center justify-center text-xl text-red-500 hover:text-red-600 duration-300">
            Delete
            <BsTrash className="ml-1" />
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Todo;
