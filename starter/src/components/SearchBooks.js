import { useState } from "react";
import * as BooksAPI from '../BooksAPI'
import SearchBooksResults from "./SearchBooksResults";

const SearchBooks=({setShowSearchpage,showSearchPage,books})=>{

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
          <a
            className="close-search"
            onClick={() => setShowSearchpage(!showSearchPage)}
          >
            Close
          </a>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title, author, or ISBN"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
            />
          </div>
        </div>        
        {results.length>0&&(<SearchBooksResults results={results}/>)}
      </div>

    )    
}

export default SearchBooks;