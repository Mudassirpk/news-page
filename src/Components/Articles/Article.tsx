import React from "react";

type Props = {
  image: string;
  number: number;
  title: string;
  excerpt: string;
};

function Article({ number, title, excerpt, image }: Props) {
  return (
    <div className="article">
      <div className="image-box">
        <img src={image} alt="" />
      </div>
      <div className="content-area">
        <p className="number">0{number}</p>
        <h2 className="title">{title}</h2>
        <p className="excerpt">{excerpt}</p>
      </div>
    </div>
  );
}

export default Article;
