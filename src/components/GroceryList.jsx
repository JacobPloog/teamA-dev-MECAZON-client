import styles from "../styles/GroceryList.module.css";
import { Link } from "react-router-dom";

export default function GroceryList({ items }) {
  return (
    <div className={styles.list}>
      {items.map((i) => (
        <div key={i.id} className={styles.item}>
          <Link to="/product" className={styles.link}>
          <h2 className={styles.header}>{i.name}</h2>
          </Link>
          <p>Category: {i.category}</p>
          <p>Price: {i.price}</p>
        </div>
      ))}
    </div>
  );
}
