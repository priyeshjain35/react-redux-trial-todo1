import React from "react";
import Todo from "./ToDo";

import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../../../redux/selectors";

const ToDoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id+index}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
);

const mapStateToProps = state => {
  const { visibilityFilter } = state
  const todos = getTodosByVisibilityFilter(state, visibilityFilter)
  return { todos }
}

export default connect(mapStateToProps)(ToDoList);