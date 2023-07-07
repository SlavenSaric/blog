import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

async function sendContentData(contactDetails) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactDetails),
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
}

export default function ContactForm() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [requestStatus, setRequestStatus] = useState();
  const [errorState, setErrorState] = useState()

  useEffect(() => {
    if(requestStatus === 'success' || requestStatus === 'error'){
        const timer = setTimeout(() => {
            setRequestStatus(null)
            setErrorState(null)
        }, 3000);
        return () => clearTimeout(timer)
    }
  }, [requestStatus])

  async function sendMessageHandler(e) {
    e.preventDefault();

    setRequestStatus("pending");

    try {
      await sendContentData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setRequestStatus("success");
      setEnteredEmail('')
      setEnteredMessage('')
      setEnteredName('')
    } catch (err) {
      setRequestStatus("error");
      setErrorState(err.message)
    }
  }

  let notification

  if(requestStatus === 'pending') {
    notification = {
        status: 'pending',
        title: 'Sending message...',
        message: 'Your message is on the way!'
    }
  }
  if(requestStatus === 'success') {
    notification = {
        status: 'success',
        title: 'Success!',
        message: 'Message send successfully!'
    }
  }
  if(requestStatus === 'error') {
    notification = {
        status: 'error',
        title: 'Error!',
        message: errorState || 'Something went wrong!'
    }
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
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
    </section>
  );
}
