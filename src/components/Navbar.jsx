import logo from "../assets/images/logo.svg";
import { pageLinks, socialLinks } from "../data";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {/* <li>
          <a href="#home" className="nav-link"> home </a>
        </li>

        <li>
          <a href="#about" className="nav-link"> about </a>
        </li>

        <li>
          <a href="#services" className="nav-link"> services </a>
        </li>

        <li>
          <a href="#tours" className="nav-link"> tours</a>
        </li> */}
          {pageLinks.map((pageLink) => {
            return(

            <li key={pageLink.id}>
              <a href={pageLink.href} className="nav-link">
                {" "}
                {pageLink.text}{" "}
              </a>
            </li>
            )
          })}
        </ul>

        <ul className="nav-icons">
          {/* <li>
          <a href="https://www.twitter.com" target="_blank" className="nav-icon"
            ><i className="fab fa-facebook"></i
          ></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" className="nav-icon"
            ><i className="fab fa-twitter"></i
          ></a>
        </li>
        <li>
          <a href="https://www.twitter.com" target="_blank" className="nav-icon"
            ><i className="fab fa-squarespace"></i
          ></a>
        </li> */}
          {socialLinks.map((socialLink) => {
            return(

            <li key = {socialLink.id}>
              <a href={socialLink.href} target="_blank" className="nav-icon">
                <i className={socialLink.iconName}></i>
              </a>
            </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
