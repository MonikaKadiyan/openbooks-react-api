import React from "react";
import BookCover from "../BookCover/BookCover";
import Title from "../Title/Title";
import Authors from "../Authors/Authors";
import PublishDates from "../PublishDates/PublishDates";
import "./bookCard.scss";

export default function BookCard({ book }) {
  return (
    <div className="bookCard">
      <div className="topContainer">
        <div className="letContainer">
          <BookCover book={book} />
        </div>
        <div className="rightContainer">
          <Title book={book} />
          <Authors book={book} />
        </div>
      </div>
      <div className="bottomContainer">
        <PublishDates book={book} />
      </div>
    </div>
  );
}
