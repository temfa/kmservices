import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div>
        <Link href="/">Startseite</Link>
        <Link href="/about">Über uns</Link>
        <Link href="/services">Dienstleistungen</Link>
        <Link href="/contact">Kontaktieren Sie uns</Link>
      </div>
      <p>Copyright ©2024</p>
    </div>
  );
};

export default Footer;
