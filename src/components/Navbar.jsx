import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import Catagories from "./Catagories.jsx";
import LogoLG from "./LogoLG.jsx";
import Signup from "./Signup.jsx";
import Cart from "./Cart.jsx";
import Box from "./Box.jsx"

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>
          <LogoLG />
        </Link>
        <Link to="/" className={styles.link}>
          <p className={styles.subTitle}>
        <Box />
            Products
            </p>
        </Link>
        <SearchBar />
        <Link to="/" className={styles.link}>
          <p className={styles.subTitle}>
          <Cart />
            Cart
            </p>
        </Link>
        <Link to="/" className={styles.link}>
          <p className={styles.subTitle}>
          <Signup />
            Sign-up
            </p>
        </Link>
      </nav>

      <Catagories />
    </>
  );
}
