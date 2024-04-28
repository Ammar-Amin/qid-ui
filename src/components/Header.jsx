import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    let [menuToggle, setMenuToggle] = useState(false)
    return (
        <div>
            <div className='w-full fixed top-0 z-50 py-6 px-8 md:px-[90px] bg-black flex justify-between items-center'>
                <Link to='/' className='text-slate-300 italic text-3xl md:text-4xl font-bold hover:text-white'>qid</Link>
                <i class="ri-menu-line md:hidden px-1 text-slate-600 text-2xl hover:bg-slate-800"
                    onClick={() => setMenuToggle(!menuToggle)}
                ></i>
                <div className='hidden md:block text-slate-400'>
                    <Link to='/app'
                        className='md:mr-10 hover:text-white'>App</Link>
                    <Link to='/form'
                        className='md:mr-10 hover:text-white'>C-Form Pro</Link>
                    <Link to='/contact'
                        className='md:mr-10 hover:text-white'>Contact</Link>
                </div>
            </div>
            {/* burger toggle btns  */}
            {
                menuToggle ?
                    <div className='w-full absolute top-[-1px] flex flex-col mt-[85px] text-white'>
                        <Link to='/app'
                            className='px-5 py-2 bg-gray-900 hover:bg-gray-800 text-white text-[14px] font-medium border-b-[1px] border-black'
                            onClick={() => setMenuToggle(!menuToggle)}>App</Link>
                        <Link to='/form'
                            className='px-5 py-2 bg-gray-900 hover:bg-gray-800 text-white text-[14px] font-medium border-b-[1px] border-black'
                            onClick={() => setMenuToggle(!menuToggle)}>C-Form Pro</Link>
                        <Link to='/contact'
                            className='px-5 py-2 bg-gray-900 hover:bg-gray-800 text-white text-[14px] font-medium border-b-[1px] border-black'
                            onClick={() => setMenuToggle(!menuToggle)}>Contact</Link>
                    </div> : null
            }
        </div>
    )
}

export default Header
