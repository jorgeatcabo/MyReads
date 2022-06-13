import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from './BooksAPI'
import SearchBooks from "./components/SearchBooks";
import Shelf from "./components/Shelf";

function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const [userCurrentlyReading, setUserCurrentlyReading] = useState([]);
  const [userWantToRead, setUserWantToRead] = useState([]);
  const [userRead, setUserRead] = useState([]);

  useEffect(() => {
    const getUserBooks = async () => {
    const res = await BooksAPI.getAll();
    const currentlyReading=res.filter((book)=>book.shelf==="currentlyReading")
    setUserCurrentlyReading(currentlyReading)
    const wantToRead=res.filter((book)=>book.shelf==="wantToRead")
    setUserWantToRead(wantToRead)
    const Read=res.filter((book)=>book.shelf==="read")
    setUserRead(Read)
    
  };

    getUserBooks();
    
  }, []);

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchBooks setShowSearchpage={setShowSearchpage} 
        showSearchPage={showSearchPage}/>) : (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <Shelf kind={userCurrentlyReading} title="Currently Reading"/>
              <Shelf kind={userWantToRead} title="Want to Read"/>
              <Shelf kind={userRead} title="Read"/>
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
