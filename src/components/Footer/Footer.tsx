import "./Footer.scss";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaArrowRight, FaPhone, FaEnvelope } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* ------------- Left Section ------------- */}
        <div className="footer__col">
          <div className="footer__brand">
            <div className="footer__icon">
            <img src="/public/Rezilla.svg" alt="" />
            </div>
            <h3>Rezilla</h3>
          </div>
          <address>
            2728 Hickory Street<br />
            Salt Lake City, UT 84104
          </address>

          <p><FaPhone /> +1 206-214-2298</p>
          <p><FaEnvelope /> support@rezilla.com</p>
        </div>

        {/* ------------- Quick Links ------------- */}
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Listings</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Become an Agent</a></li>
          </ul>
        </div>

        {/* ------------- Discovery ------------- */}
        <div className="footer__col">
          <h4>Discovery</h4>
          <ul>
            <li><a href="#">Canada</a></li>
            <li><a href="#">United States</a></li>
            <li><a href="#">Germany</a></li>
            <li><a href="#">Africa</a></li>
            <li><a href="#">India</a></li>
          </ul>
        </div>

        {/* ------------- Newsletter & Social ------------- */}
        <div className="footer__col">
          <h4>Subscribe to our Newsletter!</h4>
          <form className="footer__form">
            <input type="email" placeholder="Email Address" aria-label="Email Address" />
            <button type="submit" aria-label="Subscribe">
              <FaArrowRight />
            </button>
          </form>

          <h5>Follow Us on</h5>
          <div className="footer__socials">
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* ------------- Bottom Bar ------------- */}
      <div className="footer__bottom">
      <div className="footer__bottom-inner">
      <p>© Rezilla — All rights reserved</p>
      <div className="footer__links">
      <a href="#">Terms and Conditions</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Disclaimer</a>
    </div>
  </div>
</div>
    </footer>
  );
};

export default Footer;
