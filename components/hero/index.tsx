import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h2>
              <span>Große Sorgfalt</span> für Ihr Zuhause kommt von <span>Großartigen Serviceteams!</span>
            </h2>
            <p>Wir sind leidenschaftlich daran interessiert, sichere und komfortable Räume für Sie und Ihre Familie zu schaffen.</p>
          </div>
          <button>Lass uns anfangen</button>
        </div>
        <Image src="/images/hero.jpg" width={614} height={546} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
