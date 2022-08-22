import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-100">
            <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex justify-center text-teal-600 sm:justify-start">
                        <h2 className='text-gray-800 text-xl font-bold italic' >Cycarts</h2>
                    </div>

                    <p className="mt-4 text-sm text-center text-gray-500 lg:text-right lg:mt-0">
                        Copyright &copy; 2022. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer