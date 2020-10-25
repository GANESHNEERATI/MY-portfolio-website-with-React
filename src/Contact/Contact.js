import React, { useState } from "react";
import firebaseConfig from "../firebase";
import "./Contact.css";
import axios from "axios";
import contact from "./firebase-contacts";

function Contact() {
  const [msg, setMsg] = useState("");
  const [statusmsg, setStatusmsg] = useState(false);
  const Savemsg = () => {
    if (msg) {
      const CON_MSG = {
        contact_msg: msg,
      };
      contact
        .post("/contacts.json", CON_MSG)
        .then((res) => setStatusmsg(true))
        .catch((err) => console.log(err));
    } else {
      alert("enter msg");
    }

    setMsg("");
  };
  return (
    <div className="contact">
      <h3>Contact Me</h3>
      <div className="contact__primary">
        <h3>Mobile</h3>
        <h4>+91 7732063405</h4>
        <h3>Email</h3>
        <h4>Ganeshneerati7@gmail.com</h4>
        <h4>(OR)Leave a Message </h4>
      </div>
      <div className="contact_textarea">
        {statusmsg && (
          <h3 className="success_msg">Message sent Suceessfully</h3>
        )}
        <textarea
          type="text"
          placeholder="leave a msg"
          value={msg}
          onChange={(e) => {
            setMsg(e.target.value);
            setStatusmsg(false);
          }}
        />
        <button onClick={Savemsg}>Submit</button>
      </div>
    </div>
  );
}

export default Contact;
