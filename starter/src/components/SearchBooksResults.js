import BookShelfChanger from "./BookShelfChanger";

const SearchBooksResults=({results,onUpdateShelf})=>{
    
    return(
        <div className="search-books-results">
            <div className="list-books-content">
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Results</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                        {results.map((book)=>(   
                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div
                                        className="book-cover"
                                        style={{
                                        width: 128,
                                        height: 193,
                                        backgroundImage:`url(${book.imageLinks.smallThumbnail})`,
                                        }}
                                    ></div>
                                    <BookShelfChanger book={book} onUpdateShelf={onUpdateShelf}/>
                                    </div>
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors}</div>
                            </li>                
                        ))}
                        </ol>              
                    </div>    
                </div>    
            </div>    
        </div>    
    )
}

export default SearchBooksResults;