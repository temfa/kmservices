import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const AboutBody = () => {
  return (
    <div className={styles.whoContainer}>
      <div className={styles.whoLeft}>
        <h2>Who We Are</h2>
        <p>
          We are a team of skilled and reliable professionals dedicated to providing exceptional handyman services tailored to your needs. With years of experience, we bring
          expertise, precision, and attention to detail to every job, whether it’s a quick fix or a large project. Our commitment to quality and customer satisfaction drives us to
          deliver reliable solutions, helping you create a home or workspace you love and trust. From start to finish, we’re here to ensure your experience is smooth, transparent,
          and exceeds your expectations.
        </p>
      </div>
      <Image src="/images/about.jpg" width={539} height={457} alt="About Image" />
    </div>
  );
};

export default AboutBody;
