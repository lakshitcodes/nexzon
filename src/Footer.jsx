import React from "react";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="footer">
      <div className="footer__top" onClick={scrollToTop}>
        <p>Back to top</p>
      </div>
      <div className="footer__links">
        <div className="footer__column">
          <h3>About Lakshit</h3>
          <ul>
            <li>Computer Science Student</li>
            <li>Passionate Developer</li>
            <li>Tech Enthusiast</li>
          </ul>
        </div>
        <div className="footer__column">
          <h3>Connect with Me</h3>
          <ul>
            <li>
              <a
                href="https://github.com/lakshitcodes"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/lakshitjainnn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jainlakshit/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottomLinks">
          <ul>
            <li>Privacy Notice</li>
            <li>Terms of Use</li>
            <li>Contact</li>
          </ul>
        </div>
        <p>&copy; 2024, Lakshit Jain</p>
        <p>Made with ❤️ by Lakshit Jain 🚀</p>
      </div>
    </div>
  );
}

export default Footer;
