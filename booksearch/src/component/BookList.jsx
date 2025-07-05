import React from 'react'

const BookList = ({ books }) => {
    return (
        <><div className=" flex justify-start md:justify-center md:mt-5 w-full gap-5 md:gap-15 flex-wrap">
            {books.map((book) => (
                <div key={book.id} className="flex flex-col p-5 md:p-0">
                    <img src={book.image} alt={book.title} className="w-[200px]" />
                    <h3 className='mt-5 '>{book.title}</h3>
                </div>
            ))}
        </div>

        </>
    )
}

export default BookList;