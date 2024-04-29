import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Page4() {
    var settings = {
        accessibility: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <div className='w-full min-h-screen bg-[url("https://oneqid.com/wp-content/uploads/2023/09/grid-for-video.png")] bg-cover bg-center border-b-[0.5px] border-slate-800'>
            <div className='w-full min-h-screen bg-black/80'>
                {/* 5 containers  */}
                <div className='w-[80%] mx-auto pt-10 flex flex-col gap-4 flex-wrap md:flex-row md:w-[90%] lg:w-[80%]'>
                    <div className='md:w-[24%] p-4 bg-gradient-to-r to-[#09090978] from-[#212121D6] border-2 border-slate-800 rounded-3xl'>
                        <img decoding="async" width="800" height="800" src="https://oneqid.com/wp-content/uploads/2023/04/qr-code-12-1024x1024.png" class="attachment-large size-large wp-image-162" alt="" srcSet="https://oneqid.com/wp-content/uploads/2023/04/qr-code-12-1024x1024.png 1024w, https://oneqid.com/wp-content/uploads/2023/04/qr-code-12-300x300.png 300w, https://oneqid.com/wp-content/uploads/2023/04/qr-code-12-150x150.png 150w, https://oneqid.com/wp-content/uploads/2023/04/qr-code-12-768x768.png 768w, https://oneqid.com/wp-content/uploads/2023/04/qr-code-12.png 1147w" sizes="(max-width: 800px) 100vw, 800px"
                            className='rounded-2xl'
                        ></img>
                        <h1 className='my-3 text-white font-semibold text-xl md:text-2xl lg:text-3xl'>Collect IDs with QR</h1>
                        <p className='mt-[-10px] text-slate-400 lg:text-xl'>Easy to setup QR code stand</p>
                    </div>

                    <div className='md:w-[65%] p-4 bg-gradient-to-r to-[#09090978] from-[#212121D6] border-2 border-slate-800 rounded-3xl'>
                        <h1 className='text-white font-semibold text-xl md:text-2xl lg:text-3xl'>Business Analytics</h1>
                        <img loading="lazy" decoding="async" width="2048" height="650" src="https://oneqid.com/wp-content/uploads/2023/05/Asset-7.png" class="attachment-full size-full wp-image-411" alt="" srcset="https://oneqid.com/wp-content/uploads/2023/05/Asset-7.png 2048w, https://oneqid.com/wp-content/uploads/2023/05/Asset-7-300x95.png 300w, https://oneqid.com/wp-content/uploads/2023/05/Asset-7-1024x325.png 1024w, https://oneqid.com/wp-content/uploads/2023/05/Asset-7-768x244.png 768w, https://oneqid.com/wp-content/uploads/2023/05/Asset-7-1536x488.png 1536w" sizes="(max-width: 2048px) 100vw, 2048px"
                            className='my-3'
                        />
                        <p className='mt-[-10px] text-slate-400 lg:text-xl'>
                            Unlock the power of data with qid – your ultimate tool for comprehensive business analytics.
                        </p>
                    </div>

                    <div className='md:w-[24%] p-4 bg-gradient-to-r to-[#09090978] from-[#212121D6] border-2 border-slate-800 rounded-3xl'>
                        <h1 className='my-3 text-white font-semibold text-xl md:text-2xl lg:text-3xl'>Customized Interface</h1>
                        <p className='mt-[-10px] text-slate-400 lg:text-xl'>Tailor qid’s interface to perfectly align with your brand, creating a seamless and personalized user experience.</p>
                    </div>

                    <div className='md:w-[32%] p-4 bg-gradient-to-r to-[#09090978] from-[#212121D6] border-2 border-slate-800 rounded-3xl'>
                        <h1 className='my-3 text-white font-semibold text-xl md:text-2xl lg:text-3xl'>Developer APIs</h1>
                        <p className='mt-[-10px] text-slate-400 lg:text-xl'>
                            Supercharge your applications with qid’s robust developer APIs, enabling you to effortlessly leverage the full potential of our platform and create unique, personalized experiences for your users.
                        </p>
                    </div>
                    <div className='md:w-[32%] p-4 bg-gradient-to-r to-[#09090978] from-[#212121D6] border-2 border-slate-800 rounded-3xl'>
                        <h1 className='my-3 text-white font-semibold text-xl md:text-2xl lg:text-3xl'>One-Click C-Form</h1>
                        <p className='mt-[-10px] text-slate-400 lg:text-xl'>
                            Simplify C-Form filling with qid’s 1-Click solution, automating the process and saving you time while ensuring compliance.
                        </p>
                    </div>
                </div>
                {/* Account Btn  */}
                <div className='my-3 grid place-items-center'>
                    <button className='mt-6 px-8 py-[10px] font-bold bg-slate-50 hover:bg-black hover:text-white border-none outline-none rounded-3xl md:mx-auto lg:px-10 lg:py-3 lg:text-xl'>
                        Create Business Account
                        <i class="ri-arrow-right-s-line ml-2 rounded-full text-white bg-slate-800"></i>
                    </button>
                </div>
                {/* heading & subheading */}
                <div className='mx-4 mt-[100px] text-center text-white'>
                    <h1 className='text-wrap text-5xl font-bold md:text-6xl lg:text-7xl'>
                        <span className='bg-gradient-to-r from-[#ffca67] to-orange-500 text-transparent bg-clip-text'>Identified </span>
                        by <span className='italic'>qid</span>
                    </h1>
                    <h4 className='my-6 text-xl md:text-2xl'>
                        Let’s dive into the real stories of how our service has touched the lives of our customers.
                    </h4>
                </div>
                {/* Card Slider */}
                <div className='w-[80%] mx-auto py-14 text-white'>
                    <Slider {...settings}>
                        <div className='min-h-[350px] lg:h-[450px] p-4 bg-[#101010] border-2 border-slate-800 rounded-3xl '>
                            <img src='https://images.unsplash.com/photo-1503001358144-8d7f2c1db9f5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='img'
                                className='w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] xl:w-[110px] xl:h-[110px] object-cover rounded-full'
                            />
                            <h1 className='text-base font-semibold my-4 xl:my-6 md:text-lg lg:text-xl'>
                                Best bheed management software for your property's front desk. ID collection has never been this fast.
                            </h1>
                            <h2 className='text-[13px] text-slate-500 lg:text-base xl:text-lg'>
                                <p className='font-semibold text-base md:text-lg lg:text-xl'>Dhruv Arora</p>
                                Property Owner, Unplan Hostels, Rishikesh
                            </h2>
                        </div>

                        <div className='min-h-[350px] lg:h-[450px] p-4 bg-[#101010] border-2 border-slate-800 rounded-3xl '>
                            <img src='https://images.unsplash.com/photo-1492447166138-50c3889fccb1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='img'
                                className='w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] xl:w-[110px] xl:h-[110px] object-cover rounded-full'
                            />
                            <h1 className='text-base font-semibold my-4 xl:my-6 md:text-lg lg:text-xl'>
                                Guests are benefited as they can pre-fill the required documents before they come-in.
                            </h1>
                            <h2 className='text-[13px] text-slate-500 lg:text-base xl:text-lg'>
                                <p className='font-semibold text-base md:text-lg lg:text-xl'>Krishan Pandey</p>
                                Property Owner, The Unmad, Dharamkot
                            </h2>
                        </div>

                        <div className='min-h-[350px] lg:h-[450px] p-4 bg-[#101010] border-2 border-slate-800 rounded-3xl '>
                            <img src='https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='img'
                                className='w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] xl:w-[110px] xl:h-[110px] object-cover rounded-full'
                            />
                            <h1 className='text-base font-semibold my-4 xl:my-6 md:text-lg lg:text-xl'>
                                The managers of our property suggest QID to their customers due to its ease of access.
                            </h1>
                            <h2 className='text-[13px] text-slate-500 lg:text-base xl:text-lg'>
                                <p className='font-semibold text-base md:text-lg lg:text-xl'>Lavish Sharma</p>
                                Operations Manager,
                                The Lost Hostels
                            </h2>
                        </div>

                        <div className='min-h-[350px] lg:h-[450px] p-4 bg-[#101010] border-2 border-slate-800 rounded-3xl '>
                            <img src='https://images.unsplash.com/photo-1514222709107-a180c68d72b4?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='img'
                                className='w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] xl:w-[110px] xl:h-[110px] object-cover rounded-full'
                            />
                            <h1 className='text-base font-semibold my-4 xl:my-6 md:text-lg lg:text-xl'>
                                QID is set to revolutionise not just hospitality, but also other identity-centric industries.
                            </h1>
                            <h2 className='text-[13px] text-slate-500 lg:text-base xl:text-lg'>
                                <p className='font-semibold text-base md:text-lg lg:text-xl'>Mayur Sontakke</p>
                                Founder & CEO, NomadGao
                            </h2>
                        </div>

                        <div className='min-h-[350px] lg:h-[450px] p-4 bg-[#101010] border-2 border-slate-800 rounded-3xl '>
                            <img src='https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='img'
                                className='w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] xl:w-[110px] xl:h-[110px] object-cover rounded-full'
                            />
                            <h1 className='text-base font-semibold my-4 xl:my-6 md:text-lg lg:text-xl'>
                                Even while on the move, QID allows me to easily monitor and manage the business with precision.
                            </h1>
                            <h2 className='text-[13px] text-slate-500 lg:text-base xl:text-lg'>
                                <p className='font-semibold text-base md:text-lg lg:text-xl'>
                                    Jitesh Agarwal
                                </p>
                                Founder, The Lost Hostels
                            </h2>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}
