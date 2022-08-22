import React from 'react'

import { Link } from 'react-router-dom'

import Step from '../../../components/clientUI/Step'


const Address = () => {
    return (
        <>

            <div className="container mx-auto ">
                <div className="overflow-x-auto ">
                    <div className="px-10 mt-5">

                        <section className="text-gray-600 body-font relative">
                            <div className="container px-5 mx-auto">
                                <div className="flex flex-col text-center w-full mb-12">
                                    <p className="lg:w-3/3 mx-auto leading-relaxed text-base">
                                        <Step step1 step2 />
                                    </p>
                                </div>
                                <form action="" onSubmit={e => e.preventDefault()}>
                                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                        <div className="flex flex-wrap -m-2">
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label for="name" className="leading-7 text-sm text-gray-600">
                                                        City
                                                    </label>
                                                    <input required type="text" name="siteName" className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>
                                            <div className="p-2 w-1/2">
                                                <div className="relative">
                                                    <label for="email" className="leading-7 text-sm text-gray-600">
                                                        State
                                                    </label>
                                                    <input required type="text" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>

                                            <div className="p-2 w-full">
                                                <div className="relative">
                                                    <label for="email" className="leading-7 text-sm text-gray-600">
                                                        Country
                                                    </label>
                                                    <input required type="text" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-gray-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                </div>
                                            </div>

                                            <div className="p-2 w-full">
                                                <button className="flex mx-auto text-white bg-gray-800 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg">
                                                    <Link to="/category"> save </Link>
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                </div>
            </div>


            {/* <Footer /> */}
        </>
    )
}

export default Address