"use client";
import Link from "next/link";
import Links from "./Links/Links";
import styles from "./navbar.module.css";
import { Provider } from "react-redux";
import { store } from "@/shared/redux/store";

const Navbar = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <div>
          <Link href="/">
            <h1 className={styles.logo}>Product Wallah</h1>
          </Link>
        </div>
        <Links />
      </div>
    </Provider>
  );
};

export default Navbar;
