import React from "react";
import "./publishDates.scss";

export default function PublishDates({ book }) {
  const hasBookPublishDates = book.hasOwnProperty("publish_year");
  if (!hasBookPublishDates)
    return (
      <div className="publishDates">
        <h4>Publish Date(s):</h4>
        <div className="dateFormat">
          <div> Not available</div>
        </div>
      </div>
    );
  return (
    <div className="publishDates">
      <h4>Publish Date(s):</h4>
      <div className="container">
        {book.publish_year.map((publishDate, index) => (
          <div className="dateFormat">
            <div>{publishDate}</div>
            <div>
              {index !== book.publish_year.length - 1 ? (
                <span className="dateSpace">,</span>
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
