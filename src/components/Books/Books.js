import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import SearchBookResults from '../SearchBookResults/SearchBookResults'
import Loading from '../Loading/Loading'
import './books.scss'

export default function Books() {
  const [books, setBooks] = React.useState()
  const [isLoading, setIsLoading] = React.useState(null)
  const BASE_URL = 'http://openlibrary.org/search.json?q='

  const urlBuilder = (title) => {
    const encodedTitle = encodeURI(title).replace(/%20/g, '+')
    return `${BASE_URL}` + `${encodedTitle}`
  }
  const handleSearch = (title) => {
    if (books) setBooks([])
    setIsLoading(true)
    const uri = urlBuilder(title)
    fetch(uri)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.docs)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(`DOWNSTREAM request failed: ${error}`)
        setIsLoading(false)
      })
  }

  const sortByTitle = () => {
    const booksToBeSorted = [...books]
    const sortedBooks = booksToBeSorted.sort((a, b) =>
      a.title.localeCompare(b.title),
    )
    setBooks(sortedBooks)
  }

  const sortByLastPublishDate = () => {
    let sortedBooks = []

    // filter the books with publish dates
    let booksWithPublishDates = books.filter((book) => book.publish_year)
    // filter the books with non publish dates
    let booksWithNotPublishDates = books.filter((book) => !book.publish_year)
    // sort the books with publish dates
    sortedBooks = booksWithPublishDates.sort(
      (a, b) => Math.max(...a.publish_year) - Math.max(b.publish_year),
    )
    // append the non sorted books
    setBooks([...sortedBooks, ...booksWithNotPublishDates])
  }

  const getSortButtons = () => {
    return (
      <div className="sortButtons">
        <button onClick={sortByTitle}>Sort By Title</button>
        <button onClick={sortByLastPublishDate}>
          Sort By Last Publish Date
        </button>
      </div>
    )
  }
  return (
    <div className="books">
      <Loading open={isLoading} />
      <div className="container">
        <SearchForm handleSearch={handleSearch} />
        {books && getSortButtons()}
        <SearchBookResults books={books} />
      </div>
    </div>
  )
}
