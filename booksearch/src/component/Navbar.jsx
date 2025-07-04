import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import DehazeIcon from '@mui/icons-material/Dehaze';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav>
                <div className='bg-[#437057] text-white flex justify-between items-center' >
                    <img src={logo} alt="Logo" width="50px" className='ms-16 cursor-pointer' />
                    <h3 className='text-2xl w-full ms-2 font-bold '>Book See</h3>


                    {/* Hamburger button */}
                    <div className="md:hidden mx-5">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <div>
                                <DehazeIcon />
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <ul className="md:hidden mt-4 space-y-2">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    )}

                    {/* Desktop Menu */}

                    <ul className=' hidden md:flex gap-5 mx-20 w-full p-4 justify-end items-center ' >

                        <li className='hover:font-bold'><Link to='/home'>Home</Link></li>
                        <li className='hover:font-bold'><Link to='/about'>About</Link></li>

                    </ul>
                </div>  
            </nav>
        </div>
    )
}

export default Navbar;