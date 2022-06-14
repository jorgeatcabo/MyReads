import BookShelfChanger from "./BookShelfChanger";

const Shelf=({kind,title,onUpdateShelf})=>{

    return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {kind.map((book)=>(   
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
                                <BookShelfChanger book={book} onUpdateShelf1={onUpdateShelf}/>
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

export default Shelf;