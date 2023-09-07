/** @format */

import { useState } from "react";
import styles from "../../styles/pagiantion.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const ProfileDefault = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.main}>
      <Navbar />
      <h2>Profile Page</h2>
      <p>
        <Link className={styles.Clink} href={"/profile/Tyson"}>Go To Tyson Page !!</Link>
      </p>
      <div className={styles.counter}>
        <button onClick={() => setCount(count + 1)}>+</button>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

export default ProfileDefault;
