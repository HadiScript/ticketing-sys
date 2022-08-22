import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import Step from '../../../components/clientUI/Step'


const Form1 = () => {

    // const prv_data = JSON.parse(localStorage.getItem('form1'))


    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [saved, setSaved] = useState(false)
    const [country, setCountry] = useState("pakistan")


    const submitHander = (e) => {
        e.preventDefault();
        const data = { name, email, state, city, country }
        localStorage.setItem("form1", JSON.stringify(data))
    }

    return (
        <>
            <motion.div
                exit={{
                    x: '-100vw',
                    transition: { ease: 'easeInOut' }
                }}
                className="container mx-auto ">

                <div className="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
                    <div className="card-body">
                        {/* <Link to="/"> <MdOutlineKeyboardBackspace className='text-xl' /> </Link> */}


                        <Step step1 />

                        <section >
                            <form onSubmit={submitHander}>
                                <div className="grid grid-cols-1  gap-6 mt-4 sm:grid-cols-2">


                                    <div>
                                        <label className="text-gray-700 " for="username">Name</label>
                                        <input
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div>
                                        <label className="text-gray-700 " for="emailAddress">Email Address</label>
                                        <input
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required id="emailAddress" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div>

                                        <label className="text-gray-700 " for="password">State</label>
                                        <input
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}
                                            required id="password" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div>
                                        <label className="text-gray-700 " for="passwordConfirmation">City</label>
                                        <input
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            required id="text" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div>
                                        <select
                                            as='select'
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            className="select select-bordered  bg-white text-darkFrom w-full max-w-xs">

                                            <option value="Pakistan" selected>Pakistan</option>
                                            <option disabled>India</option>
                                        </select>
                                    </div>

                                </div>

                                <div className="flex justify-between mt-6">
                                    <button type='submit' onClick={() => setSaved(true)} className='btn ml-3 bg-darkTo hover:bg-darkFrom text-white'>save</button>
                                    {saved && <Link to="/category">
                                        <button className={`btn  bg-darkTo hover:bg-darkFrom text-white`} >Next</button>
                                    </Link>}
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </motion.div>



            {/* <Footer /> */}
        </>
    )
}

export default Form1