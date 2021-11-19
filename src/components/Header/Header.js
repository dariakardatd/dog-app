import * as React from "react";
import dogLogo from "../../images/dogLogo.svg";

const Header = (props) => {
  const { title } = props;
  return (
    <div className="Header">
      <button className="Header__btn">
        <img src={dogLogo} className="dogLogo" alt="logo" />
      </button>
      <h1 className="Header__title">{title}</h1>
      <div className="Header__subtitleWrapper">
        <button className="Header__btn">Dog Catalogue</button>
        <button className="Header__btn">My Dogs</button>
        <button className="Header__btn">Dog Details</button>
        {/* {subtitle.map((text, idx) => <button className="Header__btn" key={idx}>{text}</button>)} */}
      </div>
    </div>
  );
};

export default Header;
