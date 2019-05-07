import React from "react";
import AddTodo from "./view/components/ToDoApp/AddToDo";
import ToDoList from "./view/components/ToDoApp/ToDoList";
import VisibilityFilters from "./view/components/ToDoApp/VisibilityFilters";
import "./App.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <AddTodo />
      <ToDoList />
      <VisibilityFilters />
    </div>
  );
}