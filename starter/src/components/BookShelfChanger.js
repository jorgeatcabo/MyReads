import { useState,useEffect } from "react";
import * as BooksAPI from '../BooksAPI'

const BookShelfChanger=({book})=>{

    const [shelf, setShelf]=useState("")
    const [currentShelf, setCurrentShelf]=useState("")

    const onUpdateShelf= async(event)=>{
        const { value } = event.target;
        setShelf(value)
    }    

    useEffect(() => {
       
        const updateShelf= async(value)=>{
            await BooksAPI.update(book,shelf);
            const bookDetails=await BooksAPI.get(book.id);
            setCurrentShelf(bookDetails.shelf)
        }     
        
        if (shelf) updateShelf(shelf)

        const getBook=async()=>{
            const bookDetails=await BooksAPI.get(book.id);
            setCurrentShelf(bookDetails.shelf)
        }
        
        if (!shelf) getBook()    

      }, [shelf,book]);
    return(
        
        <div className="book-shelf-changer">
            <select onChange={onUpdateShelf} value={currentShelf}>
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