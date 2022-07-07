import React from "react";
import "./authors.scss";

export default function Authors({ book }) {
  const hasBookAnAuthor = book.hasOwnProperty("author_name");
  if (!hasBookAnAuthor)
    return (
      <div>
        <h4>Author Name(s):</h4>
        Not available
      </div>
    );
  return (
    <div className="authorName">
      <h4>Author Name(s):</h4>
      <div className="authorContainer">
        {book.author_name.map((author, index) => (
          <div className="authorFormat">
            <div className="msg">{author}</div>
            <div>
              {index !== book.author_name.length - 1 ? (
                <span className="authorSpace">,</span>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
