import styles from "./TodoList.module.css";
import noTodoImg from "../assets/no-todo-img.svg";
import { TodoItem } from "./TodoItem";
import { ITodo } from "./App";

interface ITodoListProps {
  todos: ITodo[];
  deleteTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
}

export const TodoList: React.FC<ITodoListProps> = ({
  todos,
  deleteTodo,
  toggleTodo,
}: ITodoListProps) => {
  const createdTodos: number = todos.length;
  const completedTodos: number = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  return (
    <>
      <header className={styles.header}>
        <p className={styles.createdTodos}>
          Tarefas Criadas
          <span>{createdTodos}</span>
        </p>
        <p className={styles.endedTodos}>
          Concluídas
          <span>
            {completedTodos} de {createdTodos}
          </span>
        </p>
      </header>

      <div className={styles.content}>
        {todos.length === 0 && (
          <div className={styles.noTodos}>
            <img src={noTodoImg} alt="Ícone sem Todos" />
            <p>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <br />
              Crie tarefas e organize seus itens a fazer
            </p>
          </div>
        )}

        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleTodo={toggleTodo}
            />
          );
        })}
      </div>
    </>
  );
};
