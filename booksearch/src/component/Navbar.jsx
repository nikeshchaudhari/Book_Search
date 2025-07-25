import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { IoCloseSharp } from "react-icons/io5";



import DehazeIcon from '@mui/icons-material/Dehaze';
import BookSearch from './BookSearch';
const Navbar = () => {
    const [searchbook, setSearchBook] = useState("");
    const [selectBook,setSelectBook]= useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsOpen(open)
    };

    const DrawerList = (
        <Box sx={{ width: 400 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                <div className=" w-full flex flex-col gap-3 ">
                    <h3 className='mt-0 text-2xl w-full py-3 mb-4 bg-[#437057] text-white  text-center font-bold '>Book See</h3>
                    <Link to='/home' className='text-2xl mx-5 hover:font-bold'>Home</Link>
                    <Link to='/about' className='text-2xl mx-5 hover:font-bold'>About</Link>

                </div>

            </List>
        </Box>
    );

    return (
        <div>
            <nav>
                <div className='bg-[#437057] text-white flex justify-between items-center' >
                    <img src={logo} alt="Logo" width="50px" className='lg:ms-2 cursor-pointer md:ms-2' />
                    <h3 className='text-2xl w-full ms-5 font-bold '>Book See</h3>


                    {/* Hamburger button */}
                    <div className="md:hidden mx-5">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <IoCloseSharp className='text-3xl' /> : <DehazeIcon className='text-3xl' />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
                        {DrawerList}
                    </Drawer>

                    {/* Desktop Menu */}

                    <ul className=' hidden md:flex gap-5 mx-10 w-full p-4 justify-end items-center ' >

                        <li className='hover:font-bold'><Link to='/home'>Home</Link></li>
                        <li className='hover:font-bold'><Link to='/about'>About</Link></li>

                    </ul>
                </div>
            </nav>
            {/* Hero section */}
            <div className='h-screen bg-cover bg-center flex flex-col justify-center items-center text-white' style={{ backgroundImage: "url( 'https://images.pexels.com/photos/3132530/pexels-photo-3132530.jpeg')", backgroundSize: 'cover', height: '450px', backgroundPosition: 'center' }}>
                <div className=' bg-black opacity-50 p-8 rounded-lg text-center'>
                    <h1 className='text-4xl text-white md:text-6xl font-bold mb-5'>Find Your Favourite Book</h1>
                    <p className='text-lg mb-10 text-white max-w-md mx-auto'>Search books by title or keyword</p>
                    <div className="flex w-full md:w-full">
                        <input type="text" value={searchbook} onChange={(e) => setSearchBook(e.target.value)} placeholder='Search Books' className='w-full text-white p-2 outline-none border-1 rounded-l-lg' />
                        <button className='bg-yellow-500 text-black px-6 rounded-r-lg font-semibold hover:bg-yellow-400'>Search</button>
                    </div>
                </div>
            </div>
            <BookSearch searchbook={searchbook} />
        </div>
    )
}

export default Navbar;