import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";


const MainPage=({userCurrentlyReading,userWantToRead,userRead,updateShelf})=>{

    return(

        <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf kind={userCurrentlyReading} title="Currently Reading" onUpdateShelf={updateShelf}/>
                <BookShelf kind={userWantToRead} title="Want to Read" onUpdateShelf={updateShelf}/>
                <BookShelf kind={userRead} title="Read" onUpdateShelf={updateShelf}/>
              </div>
            </div>
            <div className="open-search">
                <Link to={{pathname: "/search",}}>
                    Add a book
                </Link>
            </div>
          </div>
      </div>        

    )

}

export default MainPage;