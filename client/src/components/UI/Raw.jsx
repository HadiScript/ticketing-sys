import React from 'react'

const Raw = ({ title }) => {


    return (
        <header className="text-white bg-darkFrom body-font border rounded-md w-full">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">


                <span className="flex title-font font-medium items-center text-white mb-4 md:mb-0 ml-3 text-2xl">{title}</span>

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
        </header>
    )
}

export default Raw