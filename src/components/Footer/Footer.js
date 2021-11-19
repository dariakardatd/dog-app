import * as React from "react";
import facebook from "../../images/facebook_icon.svg";
import instagram from "../../images/instagram_icon.svg";
import linkedIn from "../../images/linkedin_icon.svg";

const Footer = (props) => {
  const { subText, links } = props;
  return (
    <footer className="footerWrapper">
      <div className="footer__linksWrapper">
        {links.map((text, idx) => (
          <button className="footer__btn" key={idx}>
            {text}
          </button>
        ))}
      </div>
      <div className="footer__logoWrapper">
      <img src={facebook} className="footer__logo" alt="logo" />
      <img src={instagram} className="footer__logo" alt="logo" />
      <img src={linkedIn} className="footer__logo" alt="logo" />
      </div>
      <p className="footer__subText">{subText}</p>
    </footer>
  );
};

export default Footer;
