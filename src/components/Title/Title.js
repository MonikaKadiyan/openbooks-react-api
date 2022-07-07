import React from "react";
import './title.scss';

export default function Title({ book }) {
  return (
    <div className="title">
      {" "}
      <h4>Title</h4>
      <div className="msg"> {book.title}</div>
    </div>
  );
}
