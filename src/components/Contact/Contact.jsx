import React, { useState } from 'react'

function Contact() {
    const [input, setInput] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    })

    function handleChange(e) {
        let { name, value } = e.target;
        // console.log(name, value)
        setInput({ ...input, [name]: value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert("Form Submitted Successfully");
        console.log(input)
        setInput({
            name: '',
            phone: '',
            email: '',
            message: ''
        })
    }

    return (
        <div className='w-full min-h-screen pt-[110px] p-7 text-white bg-gray-950 border-b-[1px] border-slate-500 md:flex md:pt-40 md:pb-20 lg:px-16 lg:pt-[230px] lg:pb-32 xl:px-32'>
            {/* Section 1  */}
            <div className='md:w-1/2 md:px-[4%] md:my-auto lg:w-3/5'>
                <h1 className='text-5xl font-semibold lg:text-7xl'>Contact Us</h1>
                <h3 className='my-3 text-[21px] leading-6 font-medium text-slate-400 md:text-[24px]'>Discover Qid – Your Partner in Secure Identity Management</h3>
                {/* Contact details  */}
                <div className='flex flex-col justify-center gap-2 md:text-lg'>
                    <p className='font-medium'>
                        <i class="ri-mail-line text-xl mr-2"></i>
                        contact@oneqid.com
                    </p>
                    <p className='font-bold'>
                        <i class="ri-phone-fill text-xl mr-2"></i>
                        +91 960 640 640 4
                    </p>
                </div>
                {/* line  */}
                <div className='w-4/5 h-[1px] my-4 bg-slate-500'></div>
                {/* trust  */}
                <p className='text-3xl mb-4 font-semibold text-blue-500'>Trusted by 25,000+ Users</p>
            </div>
            {/* Section 2  */}
            <div className='md:w-1/2 lg:w-[450px] border-r-red-400 p-4 border-[1px] border-slate-500 rounded-3xl'>
                <form onSubmit={handleSubmit}
                    className='flex flex-col gap-4 md:p-4'>
                    <div>
                        <p className='text-slate-400 md:text-lg'>
                            Name<span className='ml-2 text-red-500'>*</span>
                        </p>
                        <input type='text' name='name'
                            value={input.name}
                            onChange={handleChange}
                            className='w-full py-1 px-2 bg-transparent outline-none border-b-[1px] border-slate-500'
                        />
                    </div>
                    <div className='flex flex-col gap-4 md:flex-row'>
                        <div>
                            <p className='text-slate-400 md:text-lg'>
                                Phone
                            </p>
                            <input type='number' name='phone'
                                value={input.phone}
                                onChange={handleChange}
                                className='w-full py-1 px-2 bg-transparent outline-none border-b-[1px] border-slate-500'
                            />
                        </div>
                        <div>
                            <p className='text-slate-400 md:text-lg'>
                                Email<span className='ml-2 text-red-500'>*</span>
                            </p>
                            <input type='email' name='email'
                                value={input.email}
                                onChange={handleChange}
                                className='w-full py-1 px-2 bg-transparent outline-none border-b-[1px] border-slate-500'
                            />
                        </div>
                    </div>

                    <div>
                        <p className='text-slate-400 md:text-lg'>
                            Message<span className='ml-2 text-red-500'>*</span>
                        </p>
                        <input type='text' name='message'
                            value={input.message}
                            onChange={handleChange}
                            className='w-full py-1 px-2 bg-transparent outline-none border-b-[1px] border-slate-500'
                        />
                    </div>
                    <div className='md:flex md:justify-end'>
                        <input type='submit' value='Submit'
                            className='w-full py-[10px] font-medium text-black hover:text-white bg-slate-100 hover:bg-blue-500 cursor-pointer rounded-3xl md:w-[120px] '
                        />
                    </div>
                </form>
            </div>

        </div>

    )
}

export default Contact
