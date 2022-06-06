import { Trash } from "phosphor-react";
import styles from "./TodoItem.module.css";
import { ITodo } from "./App";

interface ITodoItemProps {
  todo: ITodo;
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

export const TodoItem: React.FC<ITodoItemProps> = ({
  todo,
  deleteTodo,
  toggleTodo,
}: ITodoItemProps) => {
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => toggleTodo(todo.id)}
      />
      <p className={todo.isCompleted ? styles.completed : undefined}>
        {todo.content}
      </p>
      <button onClick={() => deleteTodo(todo.id)} type="button">
        <Trash size={20} />
      </button>
    </div>
  );
};
