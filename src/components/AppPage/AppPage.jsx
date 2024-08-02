import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

function AppPage() {
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'instant'
        })
    }, [])
    return (
        <div className='mt-[110px]'>
            <div className='w-[90%] mx-auto flex flex-col md:flex-row md:justify-center lg:w-full'>
                {/* Section 1  */}
                <div className='flex flex-col md:justify-center md:w-[50%] lg:justify-start lg:mt-[5%] lg:pl-10 lg:w-[40%] xl:mt-[10%]'>
                    {/* Heading  */}
                    <h1 className='my-4 text-4xl font-bold text-center md:text-6xl'>Get the qid App</h1>
                    {/* Apple, Android & QR */}
                    <div className='md:flex md:flex-row md:items-center md:gap-3'>
                        {/* install apps  */}
                        <div className='flex flex-col gap-3'>
                            {/* Apple  */}
                            <div>
                                <Link target='_blank' to='https://apps.apple.com/us/app/qid-quick-id/id1629041779'>
                                    <img fetchpriority="high" decoding="async" width="800" height="244" src="https://oneqid.com/wp-content/uploads/2023/06/apple-download-2-1024x312.png" className="attachment-large size-large wp-image-540" alt="" srcSet="https://oneqid.com/wp-content/uploads/2023/06/apple-download-2-1024x312.png 1024w, https://oneqid.com/wp-content/uploads/2023/06/apple-download-2-300x91.png 300w, https://oneqid.com/wp-content/uploads/2023/06/apple-download-2-768x234.png 768w, https://oneqid.com/wp-content/uploads/2023/06/apple-download-2-1536x468.png 1536w, https://oneqid.com/wp-content/uploads/2023/06/apple-download-2-2048x624.png 2048w" sizes="(max-width: 800px) 100vw, 800px" />
                                </Link>
                            </div>
                            {/* Android  */}
                            <div>
                                <Link target='_blank' to='https://play.google.com/store/apps/details?id=com.quickids.digilocker.qid'>
                                    <img decoding="async" width="800" height="244" src="https://oneqid.com/wp-content/uploads/2023/06/gplay-diwn-2-1024x312.png" className="attachment-large size-large wp-image-542" alt="" srcSet="https://oneqid.com/wp-content/uploads/2023/06/gplay-diwn-2-1024x312.png 1024w, https://oneqid.com/wp-content/uploads/2023/06/gplay-diwn-2-300x91.png 300w, https://oneqid.com/wp-content/uploads/2023/06/gplay-diwn-2-768x234.png 768w, https://oneqid.com/wp-content/uploads/2023/06/gplay-diwn-2-1536x468.png 1536w, https://oneqid.com/wp-content/uploads/2023/06/gplay-diwn-2-2048x624.png 2048w" sizes="(max-width: 800px) 100vw, 800px" />
                                </Link>
                            </div>
                        </div>
                        {/* QR  */}
                        <div>
                            <img decoding="async" width="800" height="800" src="https://oneqid.com/wp-content/uploads/2023/06/qr-code-5-2-1024x1024.png" className="my-3 w-full md:w-[80%] attachment-large size-large wp-image-541" alt="" srcSet="https://oneqid.com/wp-content/uploads/2023/06/qr-code-5-2-1024x1024.png 1024w, https://oneqid.com/wp-content/uploads/2023/06/qr-code-5-2-300x300.png 300w, https://oneqid.com/wp-content/uploads/2023/06/qr-code-5-2-150x150.png 150w, https://oneqid.com/wp-content/uploads/2023/06/qr-code-5-2-768x768.png 768w, https://oneqid.com/wp-content/uploads/2023/06/qr-code-5-2.png 1147w" sizes="(max-width: 800px) 100vw, 800px" />
                        </div>
                    </div>
                </div>
                {/* Section 2  */}
                <div className='md:w-[45%] lg:w-[38%]'>
                    {/* Moblie in Hand  */}
                    <img loading="lazy" decoding="async" width="787" height="1024" src="https://oneqid.com/wp-content/uploads/2023/06/Asset-16-787x1024.png" className="attachment-large size-large wp-image-544" alt="" srcSet="https://oneqid.com/wp-content/uploads/2023/06/Asset-16-787x1024.png 787w, https://oneqid.com/wp-content/uploads/2023/06/Asset-16-230x300.png 230w, https://oneqid.com/wp-content/uploads/2023/06/Asset-16-768x1000.png 768w, https://oneqid.com/wp-content/uploads/2023/06/Asset-16.png 1024w" sizes="(max-width: 787px) 100vw, 787px" />
                </div>
            </div>
        </div>
    )
}

export default AppPage
