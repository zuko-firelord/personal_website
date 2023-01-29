import "./footer.css";
import { BsMailbox, BsMouse, BsTwitter } from "react-icons/bs";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://twitter.com/Sachintedwa1">
          <BsTwitter className="social" />
        </a>
        <a href="https://discord.com/users/859514610363924520">
          {" "}
          <FaDiscord className="social" />
        </a>
        <a href="https://www.linkedin.com/in/sachin-tedwa">
          {" "}
          <FaLinkedin className="social" />
        </a>

        <a href="https://github.com/TedwaSachin123">
          <FaGithub className="social" />
        </a>

        <a href="mailto:tedwasachin123@gmail.com">
          <BsMailbox className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
