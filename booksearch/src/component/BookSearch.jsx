import React, { useState } from 'react'
import BookList from './BookList';

const BookSearch = ({ searchbook }) => {


    const books = [
        { id: 1, title: 'C programming', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9eWadAHyZqyQS647vWOLQ2l7wZO_Z31Xww&s" },
        { id: 2, title: 'Java programming', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-RGzlbOfuzyX22Yy_LxIcT1In8K3jVI3hw&s" },
        { id: 3, title: 'Python programming', image: "https://m.media-amazon.com/images/I/71wvDBsPRSL.jpg" },
        { id: 4, title: 'JavaScript programming', image: "https://m.media-amazon.com/images/I/61UWUbSgc2L._UF1000,1000_QL80_.jpg" },
        { id: 5, title: 'C++ programming', image: "https://m.media-amazon.com/images/I/71uN0nVAkvL.jpg" },
    ];

    const filterBooks = books.filter((book) => {
        return book.title?.toLowerCase().includes(searchbook.toLocaleLowerCase() || "");
    })
    console.log(filterBooks);
    return (
        <div>
            <div>
                {searchbook && (
                    filterBooks.length > 0 ? (
                        filterBooks.map((books) => (
                            <div key={books.id} className="book-item">
                                <img src={books.image} alt={books.title} />
                                <h3>{books.title}</h3>
                            </div>
                        ))
                    ) : (
                        <p>No books found</p>
                    )
                )}
            </div>


{/* parment list */}
<div>
    <h2 className='mt-5 text-center text-2xl font-bold'>Available Books  </h2>
    <BookList books={books}/>
</div>
        </div>

        


    )





}


export default BookSearch