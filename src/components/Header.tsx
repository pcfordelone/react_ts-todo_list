import logoImg from "../assets/logo.svg";
import styles from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={logoImg} alt="Ignite Player Logotipo" />
    </header>
  );
};
