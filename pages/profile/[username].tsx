/** @format */

import { useRouter } from "next/router";
import styles from "@/styles/pagiantion.module.css";
import Navbar from "@/components/Navbar";

const Profile = () => {
  const router = useRouter();
  const { username } = router.query;

  return (
    <div className={styles.main}>
      <Navbar />
      <h2>{username} Personal Page</h2>
    </div>
  );
};

export default Profile;
