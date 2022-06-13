import BookShelfChanger from "./BookShelfChanger";

/*
{
    "title": "ACSM Fitness Book",
    "authors": [
        "American College of Sports Medicine"
    ],
    "publisher": "Human Kinetics",
    "publishedDate": "2003",
    "description": "Start where you are and go wherever your goals take you. No other guide offers a more comprehensive plan for developing a personal fitness program and sticking with it. Developed by the American College of Sports Medicine, ACSM Fitness Bookoffers the total package from one of the most respected organizations in the field. In its first two editions, the ACSM Fitness Booksold more than 100,000 copies. Now the classic has been enhanced and expanded with the tools you need to succeed. From simple, step-by-step instruction to new insights on nutrition, weight control, motivation, and overcoming setbacks, the authors provide the help you need to reach beyond your personal best. The key to making any fitness program effective is finding the right level of difficulty for your current ability and creating a plan that will take you to the next level. With a simple and scientifically proven fitness test, the ACSM Fitness Bookgives you everything you need to determine your starting point and monitor your ongoing progress. With sample programs, worksheets, and more, ACSM Fitness Booktakes the guesswork out of getting started and offers color photos of a variety of exercises that require minimal equipment and space. Whether your objective is to improve cardiovascular endurance, muscular strength, flexibility, or overall body condition, the ACSM Fitness Bookwill lay out a proven plan for reaching your goal in a way that works for you. Richly illustrated and easy to follow, it is the one book you need for the tools, and the motivation, to put your personal fitness program on track.",
    "industryIdentifiers": [
        {
            "type": "ISBN_10",
            "identifier": "073604406X"
        },
        {
            "type": "ISBN_13",
            "identifier": "9780736044066"
        }
    ],
    "readingModes": {
        "text": false,
        "image": true
    },
    "pageCount": 175,
    "printType": "BOOK",
    "categories": [
        "Health & Fitness"
    ],
    "averageRating": 5,
    "ratingsCount": 1,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.4.1.0.preview.1",
    "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=qpdRgb9X3EcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=qpdRgb9X3EcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=qpdRgb9X3EcC&printsec=frontcover&dq=fitness&hl=&cd=1&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=qpdRgb9X3EcC&dq=fitness&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/ACSM_Fitness_Book.html?hl=&id=qpdRgb9X3EcC",
    "id": "qpdRgb9X3EcC"
}
*/
const SearchBooksResults=({results})=>{
    
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
            </div>    
        </div>    
    )
}

export default SearchBooksResults;