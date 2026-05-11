import { MdOutlineEmail } from "react-icons/md";
import "./footer.scss";
import { FiPhone } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();
  const handleReload = () => {
    window.history.scrollRestoration = "manual";
    window.location.href = window.location.pathname;
  };
  return (
    <footer id="footer" className="footer">
      <div className="footer-left">
        <h2>LUMEN</h2>

        <div className="social-icons">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>

      <div className="footer-center">
        <nav className="footer-nav">
          <a href="#projects">projects</a>
          <a href="#services">services</a>
          <a href="#about">about</a>
          <a href="#contact">contact</a>
        </nav>

        <div className="website-link">
          <p onClick={() => handleReload()}>www.lumendesignstudio.com</p>
          <span>{date} lumen design studio. all rights reserved.</span>
        </div>
      </div>

      <div className="footer-right">
        <p>
          <MdOutlineEmail />
          <a href="mailto:lumen@gmail.com">lumen@gmail.com</a>
        </p>

        <p>
          <FiPhone />
          <a href="tel:+380123456789">+380 12 345 6789</a>
        </p>

        <p className="address">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Lviv%2C%20Zelena%20Street%20250"
            target="_blank"
            rel="noopener noreferrer"
          >lviv, zelena street 250</a>
           <br />
          (mon-fri 9.00-18.00)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
