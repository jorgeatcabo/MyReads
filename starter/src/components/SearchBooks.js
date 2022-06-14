import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI'
import SearchBooksResults from "./SearchBooksResults";
import addSmallThumbnail from "../helpers/addSmallThumbnail";

const SearchBooks=({onUpdateShelf})=>{

  const [query, setQuery] = useState("");

  const [results,setResults]=useState([])

  const handleUpdateQuery= (event)=>{
    const { value } = event.target;
    setQuery(value)        
}   


  useEffect(() => {
    
    const updateQuery =async (query) => {

      const res=await BooksAPI.search(query,5);

      if (res.length)
      {
        const cleanedResults=addSmallThumbnail(res)

        setResults(cleanedResults)
      }
      else
      {
        setResults([])
      } 
    };
    
    if (query)
    {
      updateQuery(query)
    } 
    else
    {
      setResults([])
    }


  }, [query]);
      

  return(        
      <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to={{pathname: "/",}}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={query}
            onChange={handleUpdateQuery}
          />
        </div>
      </div>        
      {results.length>0&&(<SearchBooksResults results={results} onUpdateShelf={onUpdateShelf}/>)}
    </div>

  )    
}

export default SearchBooks;