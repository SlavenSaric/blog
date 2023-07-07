import { useState } from "react";
import classes from "./contact-form.module.css";

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  function sendMessageHandler(e) {
    e.preventDefault();

    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      }),
    });
  }

  return (
    <section className={classes.contact}>
      <h1>How Can I Help You?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your email</label>
            <input
              required
              type="email"
              id="email"
              value={enteredEmail}
              onChange={(e) => setEnteredEmail(e.target.value)}
            ></input>
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input
              required
              type="text"
              id="name"
              value={enteredName}
              onChange={(e) => setEnteredName(e.target.value)}
            ></input>
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea
            required
            id="message"
            rows="5"
            value={enteredMessage}
            onChange={(e) => setEnteredMessage(e.target.value)}
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Send message</button>
        </div>
      </form>
    </section>
  );
}
