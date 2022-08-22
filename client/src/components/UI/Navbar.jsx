import React from 'react'

import { Link } from 'react-router-dom'
import { BiLogIn } from 'react-icons/bi'
import { AiOutlineMenu } from 'react-icons/ai'

import { motion } from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../actions/authAction'



const Navbar = ({ open, setOpen }) => {

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const logoutHandler = () => {
        dispatch(logout())
    }



    return (
        <motion.header
            drag dragElastic={0.7}
            style={{
                backgroundImage: `url("/images/background.jpg")`
            }} className="bg-gray-200 bg-no-repeat bg-cover ">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
                <motion.div
                    initial={{ y: -250 }}
                    animate={{
                        y: -10
                    }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    className="flex items-center  justify-between gap-4">
                    <div>
                        <AiOutlineMenu className='lg:hidden md:hidden text-white text-2xl ' onClick={() => setOpen(!open)} />
                    </div>

                    {
                        userInfo &&
                        <div className="flex justify-end items-center gap-4">
                            <div className="flex items-center gap-4 ">

                                <span
                                    onClick={logoutHandler}
                                    className=" cursor-pointer block p-2.5 text-white bg-darkFrom rounded-full hover:text-gray-700 shrink-0 shadow-sm"
                                >
                                    <BiLogIn className='text-2xl' />
                                </span>
                            </div>

                            <span
                                aria-hidden="true"
                                className="block w-px h-6 bg-gray-100 rounded-full"
                            ></span>

                            <a href="/" className="block shrink-0 text-white font-bold">
                                {userInfo.name}
                            </a>
                        </div>
                    }

                </motion.div>


                <hr className='mt-3' />
                <div className="flex justify-between items-center">

                    <motion.div
                        drag dragElastic={0.5}
                        className="mt-8">
                        <h1 className="text-2xl font-bold text-white sm:text-3xl">
                            Tickets System
                        </h1>

                        <p className="mt-1.5 text-sm text-white">
                            Submit your tickets regarding any issue, update your issue & delete your issue !
                        </p>
                    </motion.div>

                    {
                        userInfo && <button className='btn bg-transparent mt-20 border-none text-white hover:bg-white hover:text-gray-900 '>Edit Profile</button>

                    }
                </div>
            </div>
        </motion.header >
    )
}

export default Navbar