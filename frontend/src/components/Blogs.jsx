import React from 'react'
import Blogs2 from './Blogs2'



const Blogs = () => {
    return (
        <>
            <div className="blogs px-[100px] mt-4 mb-5">
                <h3 className='text-2xl'> Latest Blogs</h3>
                <div className="blogsCon">
                    <Blogs2/>
                    <Blogs2/>
                    <Blogs2/>
                    <Blogs2/>
                    <Blogs2/>
                    <Blogs2/>
                </div>
            </div>
        </>
    )
}

export default Blogs