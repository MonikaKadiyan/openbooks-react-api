import React from 'react'
import './bookCover.scss'

export default function BookCover({ book }) {
  const hasBookhasIsbn = book.hasOwnProperty('isbn')
  let imageUri = null
  if (!hasBookhasIsbn)
    return (
      <div className="no-book-cover">
        <div className="noCoverMsg">No cover available</div>
      </div>
    )
  imageUri = `https://covers.openlibrary.org/b/isbn/${book.isbn[0]}-M.jpg`
  return (
    <div className="bookCover">
      <img className="bookImage" height="243px" width="180px" src={imageUri} />
    </div>
  )
}
