import React from 'react'
import NavBar from '../components/NavBar'

const SingleBlog = () => {
    return (
        <>
            <NavBar />
            <div className="single-blog px-[100px] mt-4">
                <div className="flex w-full min-h-[400px] pt-5">
                    <div className="  left  w-[40%] h-full ">
                        <img className='w-full rounded-lg' src="https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg" alt="" />
                    </div>
                    <div className='ml-4'>
                        <h3 className='font-[500] text-3xl'>Web Development</h3>
                        <p className='text-[gray] text-[14px] mt-3 mb-3'> Created : 12th March 2024</p>
                        <b>Description</b>
                        <p className='text-[gray] text-[14px]'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime veniam quod nisi est ipsam cumque expedita. Ipsa.</p>
                    </div>
                </div>
                <div>
                Content
                </div>
            </div>
        </>
    )
}

export default SingleBlog