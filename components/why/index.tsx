import React from "react";
import styles from "./styles.module.css";
import { whyChooseUsReasons } from "@/utils/data";

const Why = () => {
  return (
    <div className={styles.whyContainer}>
      <div className={styles.whyWrapper}>
        <div className={styles.whyHeading}>
          <h2>Why Choose Us</h2>
          <p>
            Discover why we&apos;re the trusted choice for reliable and high-quality handyman services. Our commitment to excellence ensures your satisfaction every step of the
            way.
          </p>
        </div>
        {whyChooseUsReasons?.map((item, index) => {
          return (
            <div className={styles.whySingle} key={index}>
              <h1>0{index + 1}</h1>
              <div>
                <h2>{item.title}</h2>
                <p>{item.subtext}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Why;
