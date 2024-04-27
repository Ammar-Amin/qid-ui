import React from 'react'

function Footer() {
    return (
        <div className='w-full bg-black mt-[400px] md:pb-[100px]'>
            {/* main footer  */}
            <div className='p-6 flex flex-col md:flex-row md:items-center md:mx-[90px] md:border-b-[1px] md:border-slate-600 lg:mx-[180px]'>
                <h1 className='text-5xl lg:text-6xl mb-10 md:flex-1 font-bold italic text-slate-300'>qid</h1>
                <div className='flex flex-col gap-4 my-2 mx-3 md:mx-10 lg:mx-16'>
                    <h5 className='py-1 lg:text-2xl font-medium text-white text-xl'>Download App</h5>
                    <p className='text-[14px] lg:text-lg text-gray-400 hover:text-white cursor-pointer'>Android</p>
                    <p className='text-[14px] lg:text-lg text-gray-400 hover:text-white cursor-pointer'>iOS</p>
                    <p className='text-[14px] lg:text-lg text-gray-400 hover:text-white cursor-pointer'>C-Form Pro Plugin</p>
                    <p className='text-[14px] lg:text-lg text-gray-400 hover:text-white cursor-pointer'>Book a Demo</p>
                </div>
                <div className='flex flex-col gap-4 mt-6 md:mt-2 mb-2 mx-3 md:pl-[40px]'>
                    <h5 className='py-1  lg:text-2xl font-medium text-white text-xl'>Legal</h5>
                    <p className='text-[14px] lg:text-lg text-gray-400 hover:text-white cursor-pointer'>Privacy Policy</p>
                    <p className='text-[14px] lg:text-lg text-gray-400 hover:text-white cursor-pointer'>Terms of Use</p>
                    <p className='text-[14px] lg:text-lg text-gray-400 hover:text-white cursor-pointer'>Cancellation and Refund Policy</p>
                    <p className='text-[14px] lg:text-lg text-gray-400 hover:text-white cursor-pointer'>Shoping and Return Policy</p>
                </div>
            </div>
            {/* line  */}
            <div className='md:hidden w-[90%] mx-auto h-[1px] bg-slate-600'></div>
            {/* text and linkedin */}
            <div className='p-4 flex flex-col items-center gap-2 md:flex-row-reverse md:justify-between md:mx-[90px] lg:mx-[180px]'>
                <span className='cursor-pointer'>
                    <i class="ri-linkedin-box-fill text-blue-900 p-1 md:text-2xl rounded-full bg-white"></i>
                </span>
                <p className='text-white md:text-xl text-[13px]'>Oneqid Technologies Private Limited</p>
            </div>
        </div>
    )
}

export default Footer
