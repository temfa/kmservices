import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const Who = () => {
  return (
    <div className={styles.whoContainer}>
      <div className={styles.whoLeft}>
        <h2>Wer wir sind</h2>
        <p>
          Wir sind ein Team aus erfahrenen und zuverlässigen Fachkräften, die sich darauf spezialisiert haben, maßgeschneiderte Handwerksdienstleistungen für Ihre Bedürfnisse zu
          bieten. Mit jahrelanger Erfahrung bringen wir Fachwissen, Präzision und Liebe zum Detail in jedes Projekt ein – ob kleine Reparaturen oder große Projekte.
          {/* Unser Engagement für Qualität und Kundenzufriedenheit treibt uns an, zuverlässige Lösungen zu liefern und Ihnen zu helfen, ein Zuhause oder einen Arbeitsplatz zu schaffen, den Sie lieben und dem Sie vertrauen können. Von Anfang bis Ende sind wir hier, um sicherzustellen, dass Ihre Erfahrung reibungslos, transparent und über Ihre Erwartungen hinausgeht. */}
        </p>
      </div>
      <Image src="/images/about.jpg" width={539} height={457} alt="About Image" />
    </div>
  );
};

export default Who;
