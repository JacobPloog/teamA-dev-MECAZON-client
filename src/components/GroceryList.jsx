import styles from "../styles/GroceryList.module.css";
import { Link } from "react-router-dom";

export default function GroceryList({ items }) {
  return (
    <div className={styles.list}>
      {items.map((i) => (
        <div key={i.id} className={styles.item}>
          <Link to="/product" className={styles.link}>
            <img src={i.imgSrc} alt="" className={styles.img} />
            <h2>{i.item}</h2>
            <p>Category: {i.category}</p>
            <p>Price: {i.price_in_usd}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
