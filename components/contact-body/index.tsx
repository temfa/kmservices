"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const ContactBody = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div className={styles.contactBody}>
      <div className={styles.contactForm}>
        <div className={styles.contactHeader}>
          <h2>Wir sind hier, um Ihnen zu helfen!</h2>
          <p>Ihr Feedback ist uns wichtig, und wir sind bestrebt, Ihnen außergewöhnlichen Support zu bieten.</p>
        </div>
        <form
          className={styles.formBody}
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
            try {
              const emailParams = {
                name,
                email,
                message,
              };

              const res = await emailjs.send(serviceID as string, templateID as string, emailParams, userID);

              if (res.status === 200) {
                alert("Nachricht erfolgreich gesendet!");
                setLoading(false);
              }
            } catch (error) {
              console.log(error);
              alert("Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später noch einmal.");
              setLoading(false);
            }
          }}>
          <input type="email" placeholder="E-Mail-Adresse" onChange={(e) => setEmail(e.target.value)} />
          <input type="text" placeholder="Vollständiger Name" onChange={(e) => setName(e.target.value)} />
          <textarea name="" id="" placeholder="Nachricht" onChange={(e) => setMessage(e.target.value)} />
          <button type="submit">{loading ? "Laden..." : "Absenden"} </button>
        </form>
      </div>
      <Image src="/images/contact2.jpg" width={600} height={600} alt="contact robot" />
    </div>
  );
};

export default ContactBody;
