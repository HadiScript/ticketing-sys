import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/UI/Footer'
import Pagination from '../../components/UI/Pagination'
import Raw from '../../components/UI/Raw'
import data from '../../data/data'
import { motion } from 'framer-motion'

const Track = () => {
    return (
        <>

            <motion.div
                exit={{
                    x: '-100vw',
                    transition: { ease: 'easeInOut' }
                }}
                className="container mx-auto ">
                <div class="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
                    <div class="card-body">

                        <div className="lg:container lg:mx-auto sm:w-full ">
                            <div className="overflow-x-auto sm:w-full  ">
                                <div className="lg:px-10 md:lg:px-10 sm:w-full lg:mt-5">

                                    <Raw title="Trace Your Tickets" />

                                    <table className="sm:w-full text-sm divide-y divide-gray-200 ">
                                        <thead>
                                            <tr>


                                                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        Ticket #

                                                    </div>
                                                </th>
                                                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        Track
                                                    </div>
                                                </th>

                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-gray-100">
                                            {
                                                data.map((x, index) => <tr key={index} className=" hover:border-gray-400 hover:shadow-md">
                                                    <td className="p-4 font-medium text-pink-800 whitespace-nowrap ">
                                                        {x.TicketNumber}
                                                    </td>
                                                    <td className="p-4 text-gray-700 whitespace-nowrap">
                                                        <Link to={`/track/${x.id}`}> Track </Link>
                                                    </td>
                                                </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>

                                <div className="mr-auto my-5">
                                    <Pagination />
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            </motion.div>
            <Footer />
        </>
    )
}

export default Track