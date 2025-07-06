import { useNavigate, useParams } from 'react-router-dom';

const BookDetials = ({ book }) => {
    const navigate = useNavigate();
    const {id} = useParams()

    return (
        <>
            <div className="max-w-xl mx-auto mt-10 border rounded-md p-5 shadow-md bg-white">
                <img src={book.image} alt={book.title} className="w-full h-64 object-cover mb-4" />
                <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
                <p className="font-semibold">Author: {book.author}</p>
                <p className="mt-3">{book.description}</p>
                <button onClick={() => navigate(1)} className="mt-5 px-4 py-2 cursor-pointer bg-[#437057] text-white rounded hover:bg-[#365944]">Back</button>
            </div>
        </>
    )
}
export default BookDetials;
