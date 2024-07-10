import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='bg-[#2699fb] p-4'>
            <div className='max-w-[1240px] flex justify-between mx-auto'>
                <div className='text-3xl'>
                    Arsalan
                </div>
                <ul className='flex space-x-4'>
                    <li className='text-xl'>
                        <Link to='/' className='text-cyan-400'>
                            Home
                        </Link>
                    </li>
                    <li className='text-xl'>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li className='text-xl'>
                        <Link to='/works'>
                            Works
                        </Link>
                    </li>
                    <li className='text-xl'>
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
