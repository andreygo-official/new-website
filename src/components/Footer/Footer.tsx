import { MdOutlineEmail } from "react-icons/md";
import "./footer.scss";
import { FiPhone } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
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
          <p>www.lumendesignstudio.com</p>
          <span>{date} lumen design studio. all rights reserved.</span>
        </div>
      </div>

      <div className="footer-right">
        <p>
          <MdOutlineEmail />
          <span>lumen@gmail.com</span>
        </p>

        <p>
          <FiPhone />
          <span>+380 12 345 6789</span>
        </p>

        <p className="address">
          lviv, zelena street 250 <br />
          (mon-fri 9.00-18.00)
        </p>
      </div>
    </footer>
  );
};

export default Footer;
