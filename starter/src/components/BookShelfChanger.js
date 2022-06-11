import { useState } from "react";
import * as BooksAPI from '../BooksAPI'

const BookShelfChanger=({book})=>{

    const [shelf, setShelf]=useState("")

    const updateShelf= async(shelfSelected)=>{
        setShelf(shelfSelected)
        const res=await BooksAPI.update(book,shelf);
        console.log(res)
    }

    return(
        
        <div className="book-shelf-changer">
            <select value={shelf} onChange={(event) => updateShelf(event.target.value)}>
                <option value="none" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
      </div>

    )

}

export default BookShelfChanger;