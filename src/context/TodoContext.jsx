import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text: text }]);
  };

  const updateTodo = (id, updatedText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id == id ? { ...todo, text: updatedText } : { ...todo }
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id != id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, removeTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
