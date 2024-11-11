import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <p>Copyright ©2024</p>
    </div>
  );
};

export default Footer;
