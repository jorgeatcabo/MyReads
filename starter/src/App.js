import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from './BooksAPI'
import SearchBooks from "./components/SearchBooks";
import BookShelf from "./components/BookShelf";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [userCurrentlyReading, setUserCurrentlyReading] = useState([]);
  const [userWantToRead, setUserWantToRead] = useState([]);
  const [userRead, setUserRead] = useState([]);
  const [updateShelves, setUpdateShelves] = useState("");

  const updateShelf=(value)=>{
    setUpdateShelves(value)
  }

  useEffect(() => {
    const getUserBooks = async () => {
    const res = await BooksAPI.getAll();

    const currentlyReading=res.filter((book)=>book.shelf==="currentlyReading")
    setUserCurrentlyReading(currentlyReading)

    const wantToRead=res.filter((book)=>book.shelf==="wantToRead")
    setUserWantToRead(wantToRead)

    const read=res.filter((book)=>book.shelf==="read")
    setUserRead(read)
    
  };

    getUserBooks();
    
  }, [updateShelves]);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBooks setShowSearchpage={setShowSearchpage} 
        showSearchPage={showSearchPage} onUpdateShelf={updateShelf}/>) : (
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
            <a onClick={() => setShowSearchpage(!showSearchPage)}>Add a book</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
