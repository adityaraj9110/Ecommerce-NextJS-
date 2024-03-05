"use client";
import Link from "next/link";
import styles from "./navlinks.module.css";
import { useSelector } from "react-redux";
import { cartSelector } from "@/shared/redux/reducers/CartReducers";

const Navlinks = ({ item }: { item: { title: string; link: string } }) => {
  
  const cartItems = useSelector(cartSelector);

  return (
    <Link href={item.link} className={`${styles.container}`}>
      <i className="fa-solid fa-bag-shopping" style={{ fontSize: "30px" }}></i>
      <sub style={{ marginLeft: "5px" }}>{cartItems.length}</sub>
    </Link>
  );
};

export default Navlinks;
