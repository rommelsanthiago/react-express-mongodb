import React, { useState } from "react";

const TodoList = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { todos } = props;

  const handleActive = (index) => {
    setActiveIndex({
      activeIndex: index,
    });
  };

  const renderTodos = (todos) => {
    return (
      <ul className="list-group">
        {todos.map((todo, i) => (
          <li
            className={
              "list-group-item cursor-pointer " +
              (i === activeIndex ? "active" : "")
            }
            key={i}
            onClick={() => {
              handleActive(i);
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    );
  };

  return todos ? (
    renderTodos()
  ) : (
    <div className="alert alert-primary" role="alert">
      No Todos to display
    </div>
  );
};

export default TodoList;
