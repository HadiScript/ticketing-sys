import React, { useEffect } from 'react'

import { Link } from 'react-router-dom'
import { BiEdit } from 'react-icons/bi'

import Pagination from '../../components/UI/Pagination'
import Footer from '../../components/UI/Footer'
import { pendingTickets } from '../../actions/ticketAction'
import { useDispatch, useSelector } from 'react-redux'

const PendingTickets = () => {

    // const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const ticketList = useSelector((state) => state.ticketList)
    const { loading, error, tickets, } = ticketList

    console.log(tickets, "here are tickets")

    useEffect(() => {
        dispatch(pendingTickets())

    }, [dispatch])

    return (
        <>
            <div className="container mx-auto ">
                <div className="overflow-x-auto ">


                    <div className="card  mt-5 bg-white text-gray-900 shadow-xl mx-3" >
                        <div className="card-title flex items-center bg-darkFrom p-5 ">
                            <span className="text-xl text-gray-200"> Pending Tickets </span>
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
                        <div className="card-body">


                            {loading ? (
                                <p> Loading... </p>
                            ) : error ? (
                                <p className='text-red-700'>{error}</p>
                            ) : (
                                <table className="min-w-full resize-x text-sm border border-gray-100 divide-y-2 divide-gray-200">
                                    <thead >
                                        <tr className="divide-x divide-gray-100">
                                            <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">#ID</th>
                                            <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Problem</th>
                                            <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">Category</th>
                                            <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"> Country </th>
                                            <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"> Edit </th>
                                            {/* <th className="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap"> Delete </th> */}
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-200">
                                        {
                                            tickets.map((item, index) => <tr key={index} className="divide-x divide-gray-100 hover:shadow-md">
                                                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">{item._id}</td>
                                                <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">Prblem</td>
                                                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{item.category}</td>
                                                <td className="px-4 py-2 text-gray-700 whitespace-nowrap">{item.country}</td>
                                                <td className="p-4 text-blue-900 whitespace-nowrap">
                                                    <Link to={`/edit/${item._id}`}>  <BiEdit className='text-2xl cursor-pointer' /> </Link>
                                                </td>

                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            )
                            }
                        </div>

                    </div>


                    <div className="mr-auto my-5">
                        <Pagination />
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default PendingTickets

