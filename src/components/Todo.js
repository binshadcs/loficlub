import { Button, Tooltip } from "@material-ui/core";
import React from "react";
import { BsCheckBox, BsSquare, BsTrash } from "react-icons/bs";

const Todo = ({ todo, deleteTodo, markAsCompleted }) => {
  return (
    <div className="w-[90%] lg:w-[68%] relative p-3 flex items-center justify-between bg-gradient-to-l from-[#000] to-[#11111198] border border-[#4CD2D690] rounded-md mt-2 animate__animated animate__fadeInUp">
      <div className="relative flex items-center justify-start">
        <div
          className={`absolute duration-500 bg-green-400 h-1 ${
            todo.completed ? "w-full" : "w-[0px]"
          }`}
        ></div>
        <h2 className="text-xl lg:text-2xl font-medium">{todo.name}</h2>
      </div>
      <div className="flex">
        <Button className="track flex" onClick={() => markAsCompleted(todo.id)}>
          <Tooltip title={todo.completed ? "Completed" : "Not Completed"} arrow>
            <div className="flex items-center justify-center text-lg lg:text-xl text-green-600 hover:text-green-400 duration-300">
              Completed
              {todo.completed ? (
                <BsCheckBox className="ml-1" />
              ) : (
                <BsSquare className="ml-1 text-sm" />
              )}
            </div>
          </Tooltip>
        </Button>
        <Button className="track flex" onClick={() => deleteTodo(todo.id)}>
          <Tooltip title="Delete" arrow>
            <div className="flex items-center justify-center text-lg lg:text-xl text-red-500 hover:text-red-600 duration-300">
              Delete
              <BsTrash className="ml-1" />
            </div>
          </Tooltip>
        </Button>
      </div>
    </div>
  );
};

export default Todo;
