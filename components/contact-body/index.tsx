import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const ContactBody = () => {
  return (
    <div className={styles.contactBody}>
      <div className={styles.contactForm}>
        <div className={styles.contactHeader}>
          <h2>We&apos;re Here to Help!</h2>
          <p>We value your feedback and are committed to providing you with exceptional support.</p>
        </div>
        <form className={styles.formBody}>
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Full Name" />
          <textarea name="" id="" placeholder="Messages" />
          <button>Submit</button>
        </form>
      </div>
      <Image src="/images/contact.jpg" width={600} height={600} alt="contact robot" />
    </div>
  );
};

export default ContactBody;
