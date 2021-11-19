import * as React from "react";



const Picture = (props) => {
  return (
    <div className={`imgWithQuoteWrapper ${props.className}`} >
      <img className="imgWithQuoteInner__dogPic" src={props.url}/>
      <div className="imgWithQuoteInner__caption">{props.caption}</div>
    </div>
  );
};

export default Picture;



