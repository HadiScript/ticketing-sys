import React from 'react'
import { Link, } from 'react-router-dom'


const ContactUS = () => {

    const submitHandler = (e) => {
        e.preventDefault()
    }

    // if (error) {
    //     return toast(error)
    // }


    return (
        <div className="max-w-screen-xl px-4 py-16 bg-gray-200  sm:w-full lg:px-8 ">
            <div className="max-w-lg mx-auto  hover:shadow-2xl bg-white">
                <h1 className="text-2xl font-bold text-center text-dark-purple sm:text-3xl">Contact Us</h1>


                <form onSubmit={submitHandler} className="  p-8 mt-6 mb-0 space-y-4 rounded-lg ">
                    <p className="text-lg font-medium">Contact us</p>

                    <div>
                        <label htmlFor="email" className="text-sm font-medium">subject</label>

                        <div className="relative mt-1">
                            <input
                                placeholder='subject ...'
                                type="text"
                                id="email"
                                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                            />

                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="text-sm font-medium">Message</label>

                        <div className="relative mt-1">
                            <textarea
                                placeholder="Text Area"
                                id="password"
                                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                            />


                        </div>
                    </div>

                    <button type="submit" className="block w-full px-5 py-3 text-sm font-medium text-white bg-dark-purple rounded-lg">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactUS