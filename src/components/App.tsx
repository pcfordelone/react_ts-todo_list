import { useState } from "react";

import { AddTodoForm } from "./AddTodoForm";
import { Header } from "./Header";
import { TodoList } from "./TodoList";

import "../global.css";

import { v4 as uuidv4 } from "uuid";

export interface ITodo {
  isCompleted: boolean;
  content: string;
  id: string;
}

function App() {
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const handleAddNewTodo = (content: string) => {
    const newTodo: ITodo = {
      id: uuidv4(),
      isCompleted: false,
      content: content,
    };

    setTodoList([...todoList, newTodo]);
  };

  const handleDeleteTodo = (id: string) => {
    const newTodos = todoList.filter((todo) => todo.id !== id);

    setTodoList(newTodos);
  };

  const handleToggleTodoStatus = (id: string) => {
    console.log(id);

    const newList = todoList.map((todo) => {
      if (todo.id === id) {
        const updatedItem = {
          ...todo,
          isCompleted: !todo.isCompleted,
        };

        return updatedItem;
      }

      return todo;
    });

    setTodoList(newList);
  };

  return (
    <div>
      <Header />
      <AddTodoForm addNewTodo={handleAddNewTodo} />
      <TodoList
        todos={todoList}
        deleteTodo={handleDeleteTodo}
        toggleTodo={handleToggleTodoStatus}
      />
    </div>
  );
}

export default App;
