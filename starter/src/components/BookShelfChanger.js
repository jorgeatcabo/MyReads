import { useState,useEffect } from "react";
import * as BooksAPI from '../BooksAPI'

const BookShelfChanger=({book,onUpdateShelf})=>{

    const [shelf, setShelf]=useState("")
    const [currentShelf, setCurrentShelf]=useState("")

    const handleUpdateShelf= (event)=>{
        const { value } = event.target;
        setShelf(value)        
    }    

    useEffect(() => {
       
        const updateShelf= async(value)=>{
            await BooksAPI.update(book,shelf);
            const bookDetails=await BooksAPI.get(book.id);
            setCurrentShelf(bookDetails.shelf)
            onUpdateShelf(currentShelf)
        }     
        
        if (shelf) updateShelf(shelf)

        const getBook=async()=>{
            const bookDetails=await BooksAPI.get(book.id);
            setCurrentShelf(bookDetails.shelf)
        }
        
        if (!shelf) getBook()    

      }, [shelf,book,onUpdateShelf,currentShelf]);
    return(
        
        <div className="book-shelf-changer">
            <select onChange={handleUpdateShelf} value={currentShelf}>
                <option disabled>
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