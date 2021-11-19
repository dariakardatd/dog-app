import * as React from "react";

const TrendsBox = (props) => {
  return (
    <div className={`trendsBox__wrapper ${props.className}`}>
      <div className={`trendsBox__wrapperBorder ${props.className}`}>
        <h3 className="trendsBox__title">{props.title}</h3>
        <p className="trendsBox__text">{props.text}</p>
      </div>
    </div>
  );
};

export default TrendsBox;