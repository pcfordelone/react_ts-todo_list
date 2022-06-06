import { PlusCircle } from "phosphor-react";
import styles from "../components/AddTodoForm.module.css";
import { ChangeEvent, FormEvent, useState } from "react";

interface IAddTodoFormProps {
  addNewTodo: (content: string) => void;
}

export const AddTodoForm: React.FC<IAddTodoFormProps> = ({
  addNewTodo,
}: IAddTodoFormProps) => {
  const [todoText, setTodoText] = useState("");

  console.log(todoText);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewTodo(todoText);
    setTodoText("");
  };

  return (
    <form className={styles.addTodoForm} onSubmit={handleFormSubmit}>
      <input
        placeholder="Adicione uma nova tarefa"
        onChange={handleInputChange}
        value={todoText}
      />
      <button type="submit">
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  );
};
