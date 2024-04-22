import "./index.scss";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

export default function Form() {
  const [isHOvered, setIsHoverd] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_number: "",
    message: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.user_name.trim()) {
      validationErrors.user_name = "Name is required";
    }

    if (!formData.user_email.trim()) {
      validationErrors.user_email = "Email is required";
    } else if (
      !formData.user_email
        .trim()
        .match(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
    ) {
      validationErrors.user_email = "Email is not valid";
    }

    if (!formData.user_number.trim()) {
      validationErrors.user_number = "Email is required";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "You must leave me a message";
    }

    if (Object.keys(validationErrors).length === 0) {
      toast.success("Your message had sent.", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          maxHeight: "50px",
          top: "0",
          border: "1px solid #ffb400",
        },
        iconTheme: {
          primary: "#ffb400",
          secondary: "white",
        },
      });
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
    } else {
      toast.error("Please fill all fields.", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
          maxHeight: "50px",
          top: "0px",
          border: "1px solid #ff4b4b",
        },
      });
    }
  };
  return (
    <form className="col-12 col-lg-5" ref={form} onSubmit={sendEmail}>
      <div className="inputContainer col-12">
        <input
          className="input"
          type="text"
          name="user_name"
          placeholder="NAME"
          onChange={handleChanges}
        />

        <input
          className="input"
          type="email"
          name="user_email"
          placeholder="EMAIL"
          onChange={handleChanges}
        />

        <input
          className="input"
          type="text"
          name="user_number"
          placeholder="PHONE"
          onChange={handleChanges}
        />
      </div>

      <textarea
        className="col-12"
        name="message"
        placeholder="YOUR MESSAGE"
        onChange={handleChanges}
      />
      <input
        className="submit col-4"
        type="submit"
        value="SEND MESSAGE"
        onMouseEnter={() => setIsHoverd(true)}
        onMouseLeave={() => setIsHoverd(false)}
        style={
          isHOvered
            ? {
                backgroundColor: "#ffb400",
                color: "white",
                transition: "ease all 400ms",
              }
            : null
        }
      />
    </form>
  );
}
