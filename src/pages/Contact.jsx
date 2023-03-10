import { useContext, useState } from "react";
import { context } from "../App";
import "./Merge.css";
import "./Contact.css";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import wsp from "../assets/icons/wsp.png";
import team from "../assets/images/trabaja.png";

const wame = "https://wa.me/5493435267411";

function Contact() {
  const { state } = useContext(context);
  const [style, setStyle] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zmjwt56",
        "template_lnp5wks",
        form.current,
        "U5TaTBa2WiiW_sbuL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={state === "Contact" ? "merge" : "separate"}>
      <div className="container">
        <div className="centercontact">
          <div>
            <img className="team" src={team} alt="" />
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className={style ? "form" : "formout"}
          >
            <h1 className={style ? "title" : "none"}>Contact Me</h1>
            <h1 className={style ? "none" : "name thanks"}>Thanks</h1>

            <input
              className={style ? "input text itop" : "none"}
              type="text"
              name="user_name"
              placeholder="name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              className={style ? "input text icenter" : "none"}
              type="email"
              name="user_email"
              placeholder="email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              className={style ? "input message text ibottom" : "none"}
              name="message"
              placeholder="message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            {name !== "" && email !== "" && message !== "" ? (
              <input
                className={style ? "text send" : "none"}
                type="submit"
                value="Send"
                onClick={() => setStyle(false)}
              />
            ) : (
              <button className={style ? "locked" : "none"}>Fill first</button>
            )}
            <a href={wame} className="wspcontainer" target="_blank">
              <img className="wsp" src={wsp} alt="" />
            </a>

            <button
              className={style ? "none" : "text again"}
              value="Send"
              onClick={() => setStyle(true)}
            >
              Again
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;
