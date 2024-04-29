import React from 'react'
import { Link } from 'react-router-dom'

export default function Page2() {
    return (
        <div className='w-full min-h-screen bg-[url("https://oneqid.com/wp-content/uploads/2023/09/grid-for-video.png")] bg-cover bg-center border-b-[1px] border-slate-800'>
            <div className='w-full min-h-screen bg-black/80'>
                <div className='px-8 py-16 md:px-[50px] md:mt-0'>
                    {/* Section 1  */}
                    <div className='md:flex md:justify-center md:gap-10 lg:mx-10 xl:mx-20'>
                        {/* heading and create acc.  */}
                        <div className='md:pt-[20%]'>
                            <p className='text-[40px] leading-10 text-white font-bold text-wrap md:w-[350px] md:text-left md:text-5xl lg:w-[500px] lg:text-7xl'>
                                <span className='bg-gradient-to-r from-[#ffca67] to-orange-500 text-transparent bg-clip-text'>Secure</span>, easy, and always with you.</p>
                            <div >
                                <Link target='_blank' to='/app'>
                                    <button className='mt-6 px-8 py-[10px] font-bold bg-slate-50 hover:bg-black hover:text-white border-none outline-none rounded-3xl md:mx-auto lg:px-10 lg:py-3 lg:text-xl'>
                                        Create free account
                                        <i class="ri-arrow-right-s-line ml-2 rounded-full text-white bg-slate-800"></i>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        {/* img and two boxes  */}
                        <div className='my-4 '>
                            <img className="object-contain md:w-[500px]"
                                src='https://oneqid.com/wp-content/uploads/2023/05/fsgdh43_2-e1684067541108.png'
                                alt='img'
                            />
                            <div className=''>
                                {/* moblie version  */}
                                <div className='mt-[-30px] flex justify-between md:hidden'>
                                    <div className='mt-[-10px]'>
                                        <p className='px-[24px] py-[12px] text-white border-[1px] bg-[#1E1A12] border-green-800 rounded-xl'>Manage</p>
                                    </div>
                                    <p className='px-[24px] py-[12px] text-white border-[1px] bg-[#1E1A12] border-green-800 rounded-xl'>Share</p>
                                </div>
                                {/* pc version  */}
                                <div className='mt-[-30px] hidden md:absolute md:w-[450px] md:right-[2%] md:px-3 md:flex md:gap-[4%] lg:w-[600px] lg:gap-14 lg:right-[4%] xl:w-[700px]'>
                                    <div className='px-[24px] py-[12px] text-white border-[1px] bg-[#1E1A12] border-green-800 shadow-[0_10px_70px_-15px_rgba(0,0,0,0.3)] shadow-cyan-800 rounded-2xl md:mb-[20px]'>
                                        <p className="text-5xl text-slate-700 font-bold">1</p>
                                        <h2 className='py-3 text-3xl font-semibold lg:text-4xl'>Managing</h2>
                                        <p className='text-slate-400 lg:pb-6 lg:text-xl'>Consolidate all your IDs securely in one place with qid, making them easily accessible whenever you need them</p>
                                    </div>
                                    <div className='px-[24px] py-[12px] text-white border-[1px] bg-[#1E1A12] border-green-800
                                    shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] shadow-cyan-800 rounded-2xl mt-[20px]'>
                                        <p className="text-5xl text-slate-700 font-bold">2</p>
                                        <h2 className='py-3 text-3xl font-semibold lg:text-4xl'>Sharing</h2>
                                        <p className='text-slate-400 lg:pb-6 lg:text-xl'>Experience lightening-fast and trackable ID sharing with qid, ensuring seamless and efficient communication</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2  */}
                    <div className='md:mt-[50px] lg:mx-10 xl:mx-20 xl:mt-[-40px]'>
                        <h1 className='my-3 text-2xl leading-6 text-[#d4d3d3] font-semibold text-wrap md:text-4xl md:w-[300px] md:font-bold lg:text-6xl'>
                            Two Base elements of Identity ecosystem </h1>
                        {/* First row section */}
                        <div className='flex'>
                            <div className='flex flex-col items-center gap-4'>
                                <div className='h-[60%] md:h-1/6 w-[5px] bg-gradient-to-b from-transparent via-[#51ff00] to-orange-400 md:to-green-400'></div>
                                <div className='hidden w-5 h-[1px] bg-slate-400 md:block'></div>
                                <div className='hidden h-[50%] w-[5px] bg-gradient-to-b from-[#5AF84A] to-orange-400 md:block'></div>
                                <div className='hidden w-5 h-[1px] bg-slate-400 md:block'></div>
                                <div className='h-[40%] md:h-[30%] w-[5px] bg-gradient-to-b from-orange-400 to-transparent'></div>
                            </div>
                            <div>
                                <div className='md:pt-8 md:pb-14'>
                                    {/* head1 para1 */}
                                    <div className='pl-3 md:pl-10 py-3 text-3xl font-medium text-[#BABABA] md:text-4xl md:mt-7 lg:text-5xl'>
                                        <h4 className='leading-8 lg:leading-10'>Your true identity,</h4>
                                        <h4 className='leading-8 lg:leading-10'>
                                            <span className='bg-gradient-to-r from-[#9CFF9F] to-[#5AF84A] text-transparent bg-clip-text'>managed </span>
                                            with ease.</h4>
                                    </div>
                                    <p className='pl-3 md:pl-10 text-[15px] font-semibold text-[#747373] md:text-xl'>With qid, managing your IDs has never been easier. You can store and access all your IDs in one place, share them securely with others, and even get them verified with just a few clicks. Say goodbye to the hassle of carrying physical IDs or struggling with tedious verification processes, and hello to the convenience and simplicity of qid.</p>
                                </div>
                                {/* second row section  */}
                                <div className='md:my-8'>
                                    {/* head2 para2  */}
                                    <div className='pl-3 md:pl-10 py-3 text-3xl font-medium text-[#BABABA] md:text-4xl md:mt-7 lg:text-5xl'>
                                        <h4 className='mt-4 leading-8 lg:leading-10'>
                                            <span className='bg-gradient-to-r from-[#ffca67] to-orange-500 text-transparent bg-clip-text'>Share </span>
                                            your identity with ease,</h4>
                                        <h4 className='leading-8 lg:leading-10'>
                                            qid has got you covered!</h4>
                                        <p className='py-4 text-[15px] font-semibold text-[#747373] md:text-xl'>
                                            Sharing IDs with qid is simple and convenient. Just add the ID to your qid profile and share it with anyone, anytime, anywhere. No need to carry physical IDs or worry about losing them.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
