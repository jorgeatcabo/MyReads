import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from './BooksAPI'
import MainPage from "./components/MainPage";
import SearchBooks from "./components/SearchBooks";
import addSmallThumbnail from "./helpers/addSmallThumbnail";

function App() {

  const [updateShelves, setUpdateShelves] = useState("");
  const [userCurrentlyReading, setUserCurrentlyReading] = useState([]);
  const [userWantToRead, setUserWantToRead] = useState([]);
  const [userRead, setUserRead] = useState([]);
  
  const updateShelf=(value)=>{
    setUpdateShelves(value)
  }

  useEffect(() => {
    const getUserBooks = async () => {
    const res = await BooksAPI.getAll();

    if (res.length)
    {
      const cleanedResults=addSmallThumbnail(res)
      const currentlyReading=cleanedResults.filter((book)=>book.shelf==="currentlyReading")
      setUserCurrentlyReading(currentlyReading)
  
      const wantToRead=cleanedResults.filter((book)=>book.shelf==="wantToRead")
      setUserWantToRead(wantToRead)
  
      const read=cleanedResults.filter((book)=>book.shelf==="read")
      setUserRead(read)
  
    }
    else
    {
      setUserCurrentlyReading([])
      setUserWantToRead([])
      setUserRead([])
    } 


    
  };

    getUserBooks();
    
  }, [updateShelves]);


  return (

    <Routes>

      <Route exact path="/" element={<MainPage userCurrentlyReading={userCurrentlyReading}
      userWantToRead={userWantToRead} userRead={userRead} updateShelf={updateShelf}/>}/>

      <Route path="/search" element={<SearchBooks onUpdateShelf={updateShelf}/>}/>

    </Routes>

);
};

export default App;
