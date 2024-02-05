import { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [copyStatus, setCopyStatus] = useState("Copy");
  const handleCopy = () => {
    navigator.clipboard.writeText("0adnanahmad99@gmail.com");
    setCopyStatus("Copied");

    setTimeout(() => {
      setCopyStatus("Copy");
    }, 500);
  };

  return (
    <div className="contact " id="contact">
      <h2 className="color-opposite top-h">Contact</h2>
      <div className="contact-info-div padding-left-right">
        <p>
          Thank you for exploring my portfolio! If you have any inquiries,
          opportunities, or would simply like to connect, feel free to reach
          out. I am always eager to collaborate on exciting projects or discuss
          potential opportunities. Your message is important to me, and I will
          make every effort to respond promptly.
        </p>
        <p className="bold">How to Reach Me:</p>
        <ul className="contact-list-ul">
          <li className="gmail-li">
            Email:{" "}
            <span onClick={handleCopy} title="copy">
              0adnanahmad99@gmail.com
            </span>{" "}
            {copyStatus === "Copied" ? "copied" : ""}
          </li>
          <li>
            Linkedln:{" "}
            <a
              href="https://www.linkedin.com/in/adnan-ahmad-52a884227"
              target="_blank"
            >
              https://www.linkedin.com/in/adnan-ahmad-52a884227
            </a>
          </li>
          <li>
            GitHub:{" "}
            <a href="https://github.com/adnanAhmad99" target="_blank">
              https://github.com/adnanAhmad99
            </a>
          </li>
        </ul>
        <p>
          I look forward to hearing from you and exploring potential
          collaborations!
        </p>
      </div>
    </div>
  );
};

export default Contact;
