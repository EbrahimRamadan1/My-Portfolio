import "./index.scss";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Form() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_d548jjf", "template_ctlrl4t", form.current, {
        publicKey: "ezvpb5qnJarYZokzk",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <form className="col-12 col-md-5" ref={form} onSubmit={sendEmail}>
      <div className="inputContainer col-12">
        <input
          className="input col-12 col-lg-3"
          type="text"
          name="user_name"
          placeholder="NAME"
        />
        <input
          className="input col-12 col-lg-3"
          type="email"
          name="user_email"
          placeholder="EMAIL"
        />
        <input
          className="input col-12 col-lg-3"
          type="text"
          name="user_number"
          placeholder="PHONE"
        />
      </div>
      <textarea className="col-12" name="message" placeholder="YOUR MESSAGE" />
      <input className="submit col-4" type="submit" value="SEND MESSAGE" />
    </form>
  );
}
