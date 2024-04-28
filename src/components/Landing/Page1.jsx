import React from 'react'

export default function Page1() {
    return (
        <div className='w-full h-screen bg-[url("https://oneqid.com/wp-content/uploads/2023/09/fgh-bg-1.png")] bg-cover bg-center border-b-[1px] border-slate-700'>
            <div className='w-full h-screen grid place-items-center'>
                <div className='mt-6 px-8 md:px-[50px] md:mt-0 lg:px-[200px]'>
                    <p className='text-[40px] leading-10 text-white font-bold text-wrap md:text-center md:text-5xl lg:text-7xl'>ever person deserves to know and be known by their true identity</p>
                    <div className='md:flex md:justify-center'>
                        <button className='mt-6 px-8 py-[10px] font-bold bg-white border-none outline-none rounded-3xl md:mx-auto lg:px-10 lg:py-3 lg:text-xl'>Download qid</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
