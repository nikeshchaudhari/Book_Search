import React from 'react'
import book from '../books'
import { useNavigate, useParams } from 'react-router-dom'
const BookDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const books = book.find(b => b.id === Number(id));

  if (!books) {
    return <h2 className="text-center text-2xl mt-10 text-red-600">Book Not Found</h2>

  }
  return (
    <div className='mx-10 mt-10 flex flex-row gap-10 justify-center'>
      <img src={books.image} alt={books.title} width="300px" />
      <div className='mt-20'>
        <h2 className="text-2xl font-bold mb-2">{books.title}</h2>
        <p className="font-semibold">Author: {books.author}</p>
        <p className="mt-3 w-[300px] ">{books.description}</p>
<button onClick={()=> navigate(-1)} className='bg-[#437057] min-w-[100px] text-white rounded mt-5 py-3 px-2 cursor-pointer hover:bg-[#365944]'>Back</button>
      </div>
    </div>
  )
}

export default BookDetails