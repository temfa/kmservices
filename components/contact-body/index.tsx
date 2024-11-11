import React from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const ContactBody = () => {
  return (
    <div className={styles.contactBody}>
      <div className={styles.contactForm}>
        <div className={styles.contactHeader}>
          <h2>Wir sind hier, um Ihnen zu helfen!</h2>
          <p>Ihr Feedback ist uns wichtig, und wir sind bestrebt, Ihnen außergewöhnlichen Support zu bieten.</p>
        </div>
        <form className={styles.formBody}>
          <input type="email" placeholder="E-Mail-Adresse" />
          <input type="text" placeholder="Vollständiger Name" />
          <textarea name="" id="" placeholder="Nachricht"></textarea>
          <button>Absenden</button>
        </form>
      </div>
      <Image src="/images/contact.jpg" width={600} height={600} alt="contact robot" />
    </div>
  );
};

export default ContactBody;
