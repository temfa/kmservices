import React from "react";
import styles from "./styles.module.css";
import { whyChooseUsReasons } from "@/utils/data";

const Why = () => {
  return (
    <div className={styles.whyContainer}>
      <div className={styles.whyWrapper}>
        <div className={styles.whyHeading}>
          <h2>Warum uns wählen</h2>
          <p>
            Entdecken Sie, warum wir die vertrauenswürdige Wahl für zuverlässige und hochwertige Handwerksdienstleistungen sind. Unser Engagement für Exzellenz sorgt dafür, dass
            Sie bei jedem Schritt zufrieden sind.
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
