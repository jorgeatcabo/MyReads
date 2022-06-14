import { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from '../BooksAPI'
import SearchBooksResults from "./SearchBooksResults";

const SearchBooks=({setShowSearchpage,showSearchPage, onUpdateShelf})=>{

    const [query, setQuery] = useState("");

    const [results,setResults]=useState([])

    const updateQuery =async (query) => {

        setQuery(query.trim());

        if (query){
            const res=await BooksAPI.search(query,5);
            // const clean=res.map((book)=>{
            //     if (!book.imageLinks.smallThumbnail){
            //         console.log("empty")
            //     }
            // });   

            if (res)
            {
                setResults(res)
            }
            else
            {
                setResults([])
            } 

        }
        else
        {
            setResults([])
        }
        
      };
          
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
              onChange={(event) => updateQuery(event.target.value)}
            />
          </div>
        </div>        
        {results.length>0&&(<SearchBooksResults results={results} onUpdateShelf={onUpdateShelf}/>)}
      </div>

    )    
}

export default SearchBooks;