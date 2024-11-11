import React from "react";
import styles from "./styles.module.css";
import { services } from "@/utils/data";
import Image from "next/image";

const Service = () => {
  return (
    <div className={styles.container}>
      {services?.map((item, index) => (
        <div className={styles.serviceSingle} key={index}>
          <Image width={500} height={600} src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Service;
