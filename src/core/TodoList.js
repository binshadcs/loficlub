import React, { useState } from "react";

// material design
import { TextField } from "@material-ui/core";

// uuid for getting ids
import { v4 as uuidv4 } from "uuid";

// components
import { Todo } from "../components";

// useLocalStorage hook
import useLocalStorage from "../util/useLocalStorage";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useLocalStorage("todos", []);

  // adding todo
  const AddNewTodo = (e) => {
    if (todo) {
      // checking enter
      if (e.keyCode === 13) {
        // creating an obj
        const todoObj = { id: uuidv4(), name: todo, completed: false };

        setTodos([...todos, todoObj]);
        setTodo("");
      }
    }
  };

  // deleting todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // mark as completed
  const markAsCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="flex items-center justify-center h-full w-full flex-col">
      <div className="w-[87.5%] lg:w-[68%] -ml-3 mt-5 p-2 flex items-center justify-between bg-gradient-to-r from-[#00C9FF]  to-[#92FE9D] border border-[#4CD2D6] rounded-md mb-4 animate__animated animate__fadeInDown">
        <div className="w-full h-full rounded-md shadow-2xl">
          <TextField
            label="Todo"
            variant="filled"
            className="w-full bg-white rounded-md shadow-5xl"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            onKeyDown={(e) => AddNewTodo(e)}
          />
        </div>
      </div>
      <div className="flex-1 w-full overflow-y-scroll flex flex-col items-center pb-[10%]">
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
            deleteTodo={deleteTodo}
            markAsCompleted={markAsCompleted}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
