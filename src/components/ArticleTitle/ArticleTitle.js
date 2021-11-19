import * as React from "react";

const ArticleTitle = (props) => {
  return (
    <div className={`ArticleTitle__wrapper ${props.className}`}>
      <div className="ArticleTitle__inner">
        <h3 className="ArticleTitle__title">{props.title}</h3>
        <p className="ArticleTitle__text">{props.text}</p>
      </div>
    </div>
  );
};

export default ArticleTitle;