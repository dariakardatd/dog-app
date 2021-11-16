import * as React from "react";
import dogLogo from "../../images/dogLogo.svg";

const Header = (props) => {
  const { title, subtitle } = props;
  return (
    <div className="Header">
      <img src={dogLogo} className="dogLogo" alt="logo" />
      <h1 className="Header__title">{title}</h1>
      {subtitle.map((text, idx) => <h2 key={idx}>{text}</h2>)}
    </div>
  );
};

export default Header;
