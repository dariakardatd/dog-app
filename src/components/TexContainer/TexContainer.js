import * as React from "react";

const TexContainer = (props) => {
  return (
    <div className={`TexContainer__wrapper ${props.className}`}>
      <p className="TexContainer__text">{props.text}</p>
    </div>
  );
};

export default TexContainer;