"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import Bars from "@/svg/bars";
import Close from "@/svg/close";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.headerLogo}>
          <Image src="/images/logo.png" width={60} height={80} alt="Header Logo" />
          {mobile ? <Close action={() => setMobile(false)} /> : <Bars action={() => setMobile(true)} />}
        </div>
        <div className={mobile ? `${styles.headerNav} ${styles.mobileNav}` : styles.headerNav}>
          <Link href="/">Startseite</Link>
          <Link href="/about">Über uns</Link>
          <Link href="/services">Dienstleistungen</Link>
          <button>
            <Link href="/contact">Kontaktieren Sie uns</Link>
          </button>
        </div>
        <button>
          <Link href="/contact">Kontaktieren Sie uns</Link>
        </button>
      </div>
    </div>
  );
};

export default Header;
