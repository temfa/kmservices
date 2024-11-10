import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLogo}>
          <Image src="/images/logo.png" width={60} height={80} alt="Header Logo" />
        </div>
        <div className={styles.headerNav}>
          <Link href="/home">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
        </div>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default Header;
