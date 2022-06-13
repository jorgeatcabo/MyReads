import BookShelfChanger from "./BookShelfChanger";

const CurrentlyReading=({userCurrentlyReading})=>{

    return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {userCurrentlyReading.map((book)=>(   
                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div
                                    className="book-cover"
                                    style={{
                                    width: 128,
                                    height: 193,
                                    backgroundImage:`url(${book.imageLinks.smallThumbnail}`,
                                    }}
                                ></div>
                                <BookShelfChanger book={book}/>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </li>                
                    ))}
                </ol>
            </div>
      </div>
    )


}

export default CurrentlyReading;