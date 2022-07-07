import React from "react";
import BookCard from "../BookCard/BookCard";
import "./searchBookResults.scss";

export default function SearchBookResults({ books }) {
    if(!books) return null;
  return (
    <div className="searchBookResults">
      {books.map((book) => {
        return <BookCard book={book}></BookCard>;
      })}
    </div>
  );
}
