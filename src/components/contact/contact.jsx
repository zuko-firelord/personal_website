import "./contact.css";
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineMail } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h1>Contact Me</h1>
      <div className="contact-links">
        <a
          href="https://github.com/TedwaSachin123"
          className="contact github"
          // target={"blank"}
        >
          <AiOutlineGithub className="icon" />
          <h2>
            github <span>Creative Ambition</span>
          </h2>
        </a>

        <a
          href="mailto:tedwasachin123@gmail.com"
          className="contact mail"
          // target={"blank"}
        >
          <AiOutlineMail className="icon"/>
          <h2>
            Email <span>TEDWASACHIN123@GMAIL.COM</span>
          </h2>
        </a>

        <a href="https://www.linkedin.com/in/sachin-tedwa/" className="contact linkedin">
          <AiOutlineLinkedin className="icon" />
          <h2>
            Linkedin <span></span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
