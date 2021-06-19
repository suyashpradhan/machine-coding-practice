import React, { useEffect, useState } from "react";

export const LocalStorage = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleTodo = () => {
    setTodos([...todos, { id: Date.now(), text: input, isDone: false }]);
    setInput("");
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("todos"));

    if (items) {
      setTodos(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleCompleteTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleRemoveTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>LocalStorage</h1>

      <form>
        <input
          type="text"
          placeholder="Add task"
          onChange={(e) =>
            setInput(!e.target.value ? alert("Empty") : e.target.value)
          }
          value={input}
        ></input>
        <button type="button" onClick={handleTodo}>
          Submit Task
        </button>
      </form>

      <br />
      <br />
      <br />
      <h2>My Todos</h2>
      {todos.map(({ id, text, isDone }) => {
        return (
          <div key={id}>
            <h3
              style={
                isDone
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }
            >
              {text}
            </h3>
            <button onClick={() => handleCompleteTodo(id)}>Complete</button>
            <button onClick={() => handleRemoveTodo(id)}>Remove Todo</button>
          </div>
        );
      })}
    </>
  );
};

export default LocalStorage;
