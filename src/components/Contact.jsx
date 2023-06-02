import { useContext, useState, useRef } from "react";
import { context } from "../App";
import emailjs from "@emailjs/browser";
import wsp from "../assets/icons/wsp.png";
import team from "../assets/images/trabaja.png";
import "./Merge.css";
import "./Contact.css";

// contact text 2
const wame = "https://wa.me/5493435267411";

function Contact() {
  const { state, translate } = useContext(context);
  const [style, setStyle] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE,
        import.meta.env.VITE_TEMP,
        form.current,
        import.meta.env.VITE_PASS
      )
      .then(
        (result) => {
          console.log(result.text);
          setStyle(false);
        },
        (error) => {
          window.alert("Error al enviar el mensaje, intente mas tarde");
          console.log(error);
        }
      );
  };

  return (
    <div className={state === "Contact" ? "merge" : "separate"}>
      <div className="container">
        <div className="centercontact">
          <img className="team" src={team} alt="" />

          <div className="formcontainer">
            <form
              ref={form}
              onSubmit={sendEmail}
              className={style ? "form" : "formout"}
            >
              <h1 className={style ? "title" : "none"}>
                {translate ? "Contacto" : "Contact Me"}
              </h1>
              <h1 className={style ? "none" : "name thanks"}>
                {translate ? "Gracias" : "Thanks"}
              </h1>
              <input
                className={style ? "input text itop" : "none"}
                type="text"
                name="user_name"
                placeholder={translate ? "nombre..." : "name..."}
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
                placeholder={translate ? "mensaje..." : "message..."}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />

              {name !== "" && email !== "" && message !== "" ? (
                <button className={style ? "send text" : "none"} type="submit">
                  {translate ? "Enviar" : "Send"}
                </button>
              ) : (
                <p className={style ? "locked text" : "none"}>
                  {translate ? "Enviar" : "Send"}
                </p>
              )}

              <a href={wame} className="wspcontainer" target="_blank">
                <p className="text" src={wsp}>
                  WhatsApp
                </p>
              </a>

              <div
                className={style ? "none" : "send"}
                value="Send"
                onClick={() => setStyle(true)}
              >
                {translate ? "Reenviar" : "Again"}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
