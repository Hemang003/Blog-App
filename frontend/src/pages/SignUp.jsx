import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
const SignUp = () => {
    return (
        <>
            <div className="con flex flex-col items-center justify-center h-screen bg-[#070707]">
                <form className='w-[26vw] min-h-[auto] bg-[#0f0e0e] rounded-2xl p-5 flex flex-col items-center'>
                    <img className='-mt-3 w-[240px] h-[100px] object-cover' src={logo} alt="" />
                    <div className='w-full'>
                        <p className='text-[gray] text-[14px] mt-3'>Username</p>
                        <div className="inputBox">
                            <input type="text" placeholder='Username' required />
                        </div>

                        <p className='text-[gray] text-[14px] mt-3'>Name</p>
                        <div className="inputBox">
                            <input type="text" placeholder='Name' required />
                        </div>

                        <p className='text-[gray] text-[14px] mt-3'>Email</p>
                        <div className="inputBox">
                            <input type="email" placeholder='Email' required />
                        </div>

                        <p className='text-[gray] text-[14px] mt-3'>Password</p>
                        <div className="inputBox">
                            <input type="password" placeholder='Password' required />
                        </div>

                        <p className='text-[14px] text-[gray] my-3'>Already have an account <Link to="/login" className='text-purple-600'>Login</Link></p>
                        <button className="btnNormal w-full">Sign Up</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default SignUp