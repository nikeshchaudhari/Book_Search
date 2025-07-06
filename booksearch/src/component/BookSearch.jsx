import React, { useState } from 'react'
import BookList from './BookList';
import BookDetials from './BookDetails';
import { Navigate, useNavigate } from 'react-router-dom';
import books from "../books"
const BookSearch = ({ searchbook }) => {

    const [selectBook, setSelectBook] = useState(null)
const navigate = useNavigate();
   
    const filterBooks = books.filter((book) => {
        return book.title?.toLowerCase().includes(searchbook.toLocaleLowerCase() || "");
    })
    console.log(filterBooks);
    return (
        <div>
            {/* parment list */}
            <div>
                <h2 className='mt-5 text-center text-2xl font-bold '>Available Books  </h2>
                <BookList books={books.slice(0, 5)} />
            </div>
            <div className='flex justify-center md:justify-center mt-10 w-full gap-5 md:gap-15 flex-wrap'>
                {searchbook && (
                    filterBooks.length > 0 ? (
                        filterBooks.map((books) => (
                            <div key={books.id} className="flex flex-col p-5 md:p-0  cursor-pointer mt-10 mb-10" onClick={()=>navigate(`/book/${books.id}`)}>

                                <img src={books.image} alt={books.title} className='w-[300px] mb-3 drop-shadow-blue-900' />
                                <h3 className='text-center'>{books.title}</h3>

                            </div>
                        ))
                    ) : (
                        <p className='text-center font-extrabold text-[30px] text-red-700'>No books found</p>
                    )
                )}
                {/* Book details */}
                {selectBook && (
                    <BookDetials book ={selectBook}/>
                )}
            </div>



        </div>




    )





}


export default BookSearch