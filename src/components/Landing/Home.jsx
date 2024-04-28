import React from 'react'
import Page1 from './Page1'
import Page3 from './Page3'
import Page4 from './Page4'
import Page2 from './Page2'

function Home() {
    return (
        <div>
            {/* 1st page  */}
            <Page1 />

            {/* 2nd page (most complex page) */}
            <Page2 />

            {/* 3rd page  */}
            <Page3 />

            {/* 4nd page  */}
            <Page4 />
        </div>
    )
}

export default Home
