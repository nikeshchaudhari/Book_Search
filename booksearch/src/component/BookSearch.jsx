import React, { useState } from 'react'
import BookList from './BookList';
import BookDetials from './BookDetails';
import { Navigate, useNavigate } from 'react-router-dom';

const BookSearch = ({ searchbook }) => {

    const [selectBook, setSelectBook] = useState(null)
const navigate = useNavigate();
    const books = [
        { id: 1, title: 'C programming', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX9eWadAHyZqyQS647vWOLQ2l7wZO_Z31Xww&s", author: "Dennis Ritchie", description: "History. C was created by Dennis Ritchie at Bell Labs in the early 1970s as an augmented version of Ken Thompson's B. Another Bell Labs employee, Brian Kernighan, had written the first C tutorial, and he persuaded Ritchie to coauthor a book on the language." },
        { id: 2, title: 'Java programming', image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ-RGzlbOfuzyX22Yy_LxIcT1In8K3jVI3hw&s", author: "James Gosling", description: "The primary author of the Java programming language is James Gosling, who led the development of Java while at Sun Microsystems. He is widely recognized as the . While James Gosling is the principal figure, other engineers at Sun Microsystems, such as Mike Sheridan and Patrick Naughton, also played significant roles in the language's early development. " },
        { id: 3, title: 'Python programming', image: "https://m.media-amazon.com/images/I/71wvDBsPRSL.jpg", author: "Guido van Rossum", description: "Python was created by Guido van Rossum, and first released on February 20, 1991. While you may know the python as a large snake, the name of the Python programming language comes from an old BBC television comedy sketch series called Monty Python's Flying Circus." },
        { id: 4, title: 'JavaScript programming', image: "https://m.media-amazon.com/images/I/61UWUbSgc2L._UF1000,1000_QL80_.jpg", author: "Brendan Eich", description: "Brendan Eich (/ˈaɪk/ EYEK; born July 4, 1961) is an American computer programmer and technology executive. He created the JavaScript programming language and co-founded the Mozilla project, the Mozilla Foundation, and the Mozilla Corporation." },
        { id: 5, title: 'C++ programming', image: "https://m.media-amazon.com/images/I/71uN0nVAkvL.jpg", author: "Bjarne Stroustrup", description: "The C++ Programming Language is a computer programming book first published in October 1985. ... Author, Bjarne Stroustrup. Cover artist, Brian Gakeadumele." },
        { id: 6, title: 'Ardino programming', image: "https://m.media-amazon.com/images/I/71uN0nVAkvL.jpg", author: "Simon Monk ", description: "In 2005, building upon the work of Hernando Barragán (creator of Wiring), Massimo Banzi and David Cuartielles created Arduino, an easy-to-use programmable device for interactive art design projects, at the Interaction Design Institute Ivrea in Ivrea, Italy." },

    ];

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