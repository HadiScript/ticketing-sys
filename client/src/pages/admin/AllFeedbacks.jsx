import React from 'react'

import { motion } from 'framer-motion'

const feedbackData = [
    {
        id: 1,
        name: "Ali",
        email: "ali@gamil.com",
        rating: 2,
        improveMessage: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
        id: 2,
        name: "abbas",
        email: "abbbas@gamil.com",
        rating: 3,
        improveMessage: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
        id: 3,
        name: "hussain",
        email: "hussain@gamil.com",
        rating: 5,
        improveMessage: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
]


const AllFeedbacks = () => {
    return (
        <div

            className="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
            <div className="card-body">

                <div className="flex justify-between">
                    <h1 className='my-2 text-xl  font-bold'><span className="badge p-5 text-white"> All Feedback From Client</span> </h1>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <div className="relative">
                            <label className="sr-only" htmlFor="search"> Search </label>

                            <input
                                className="w-full h-10 pl-4 pr-10 text-sm text-darkFrom bg-white border border-darkTo outline-none rounded-full shadow-sm sm:w-56"
                                id="search"
                                type="search"
                                placeholder="Search website..."
                            />

                            <button
                                className="absolute p-2 text-gray-600 transition -translate-y-1/2 rounded-full hover:text-gray-700 bg-gray-50 top-1/2 right-1"
                                type="button"
                                aria-label="Submit Search"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-4 h-4 bg-transparent"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-darkFrom dark:text-gray-200">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Email
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Rating
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    How to improve ?
                                </th>

                                <th scope="col" className="px-6 py-3">
                                    <span className="sr-only">Delete</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                feedbackData.map(x =>
                                    <tr className="bg-white border-b dark:bg-darkTo dark:border-gray-700 hover:bg-darkFrom dark:hover:bg-darkFrom">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                            {x.name}
                                        </th>
                                        <td className="px-6 py-4">
                                            <a href="#" target="#" className='hover:underline text-blue-700'> {x.email}</a>
                                        </td>
                                        <td className="px-6 py-4">
                                            {x.rating}
                                        </td>
                                        <td className="px-6 py-4  "  >
                                            {x.improveMessage}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <span href="#" className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline">Delete</span>
                                        </td>
                                    </tr>

                                )
                            }


                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default AllFeedbacks