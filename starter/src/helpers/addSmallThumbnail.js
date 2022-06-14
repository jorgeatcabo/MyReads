
const addSmallThumbnail=(res)=>{
    if (res.length)
    {
        const cleanedResults=res.map((book)=>{
            if (!book.imageLinks){
              const imageLinks = {
                smallThumbnail: ''  
              };
              book.imageLinks=imageLinks;
            }
            return book;  
          });   
          return cleanedResults;
    }
    else
    {
        return []
    }
    
    
}

export default addSmallThumbnail;