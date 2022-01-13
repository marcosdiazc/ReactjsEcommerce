import styles from './navBar.module.css'
import { CartWidget } from '../CartWidget/CartWidget';

export const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <p>Codershop</p>
      <ul className= {styles.links}>
        <li>Libros</li>
        <li>Tecnologia</li>
        <li>Hogar</li>
        <li>Deportes</li>
      </ul>
    </nav>
  );
};
