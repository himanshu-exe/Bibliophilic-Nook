import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
// import PrivacyModal from "../ModalView/PrivacyModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faGithub,
  faFacebook,
  faInstagram,
  faTwitter,

} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="text" style={{ alignContent: "center" }}>

        Copyright<FontAwesomeIcon icon={faCopyright} style={{ padding: 5 }} />
        2023 BOOK STORE. All Rights
        Reserved.

      </div>
      <div className="icon">
                <Link className="icon" to="/about">About</Link>|
                <Link className="icon" to="/contact">Contact</Link>|
                <Link className="icon" to="/policy">Privacy Policy</Link>
      </div>
      <span className="text"> Follow us on</span>

      <div className="icons" >

        {/* <Link to= '/instakalink' className="icon"><FontAwesomeIcon style={{ padding: 5 }} icon={faInstagram} /></Link> */}
        <FontAwesomeIcon style={{ padding: 5 }} icon={faInstagram} />
        <FontAwesomeIcon style={{ padding: 5 }} icon={faFacebook} />
        <FontAwesomeIcon style={{ padding: 5 }} icon={faGithub} />
        <FontAwesomeIcon style={{ padding: 5 }} icon={faTwitter} />
        <FontAwesomeIcon style={{ padding: 5 }} icon={faYoutube} />
      </div>
    </footer>
  );
};

export default Footer;