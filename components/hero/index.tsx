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
              <span>Great Care</span> for Your Home Comes from <span>Great Service Teams!</span>
            </h2>
            <p>We’re passionate about creating safe and comfortable spaces for you and your family.</p>
          </div>
          <button>Let&lsquo;s Get Started</button>
        </div>
        <Image src="/images/hero.jpg" width={614} height={546} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
