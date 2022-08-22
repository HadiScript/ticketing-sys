import React from 'react'
import { useParams, Link } from 'react-router-dom'

import data from '../../data/data';


const TrackById = () => {
    const { id } = useParams();

    const list = data.find(x => x.id === id)

    return (
        <>

            <div className="container mx-auto ">
                <div className="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
                    <div className="card-body">
                        <h2 className='text-xl font-bold'>{list.id}</h2>
                        <p>{list.problem}</p>

                        <div className='my-10'>
                            <div
                                className="after:w-full after:h-1 after:mt-4 after:block after:rounded-lg after:bg-gray-200"
                            >
                                <ol className="grid grid-cols-3 text-sm font-medium text-gray-500">


                                    <li className={`relative text-left ${list.status.isPending || list.status.onWorking || list.status.confirm ? `text-darkTo` : `text-gray-400`} `}>
                                        <span
                                            className={` ${list.status.isPending || list.status.onWorking || list.status.confirm ? `text-darkTo` : `text-gray-400`}  left-0 -bottom-[1.75rem] absolute rounded-full text-white`}
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </span>

                                        <span className="hidden sm:block"> Pending </span>

                                        <svg
                                            className="w-6 h-6 ml-0 sm:hidden"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                                            />
                                        </svg>
                                    </li>

                                    <li className={`relative text-center  ${list.status.onWorking || list.status.confirm ? `text-darkTo` : `text-gray-400`} `}>
                                        <span
                                            className={`${list.status.onWorking || list.status.confirm ? `text-darkTo` : `text-gray-400`} left-1/2 -translate-x-1/2 -bottom-[1.75rem] absolute rounded-full text-white `}
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </span>

                                        <span className="hidden sm:block"> On Working </span>

                                        <svg
                                            className="w-6 h-6 mx-auto sm:hidden"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                    </li>


                                    <li className={`relative text-right ${list.status.confirm ? `text-darkTo` : `text-gray-400`}`}>
                                        <span class="hidden sm:block"> Payment </span>

                                        <svg
                                            class="w-6 h-6 ml-auto sm:hidden"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            stroke-width="2"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                            />
                                        </svg>
                                    </li>


                                </ol>
                            </div>
                        </div>
                        <div className="flex">
                            <Link to="/track/tickets"
                                className='btn mt-t bg-darkFrom'
                            >
                                back
                            </Link>
                        </div>
                    </div>

                </div>
            </div>



        </>
    )
}

export default TrackById