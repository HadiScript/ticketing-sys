import React from 'react'
import Pagination from '../../components/UI/Pagination'
import Raw from '../../components/UI/Raw'


import Footer from '../../components/UI/Footer';

import { RiDeleteBack2Line } from 'react-icons/ri'

import { motion } from 'framer-motion'

const data = [
    {
        date: "10-11-2010 10:09 AM",
        siteName: "Cycarts.com",
        TicketNumber: 123455,
        type: "customer",
        serverity: 3,
        ID: "123sdab",
        address: "House R/12, Model Town",
        city: "Lahore",
        Country: "Pakistan",
        state: "Lahore"
    },
    {
        date: "10-11-2019 10:11 PM",
        siteName: "cyconverts.com",
        TicketNumber: 123423,
        type: "customer",
        serverity: 3,
        ID: "123sdab",
        address: "House R/12, Model Town",
        city: "Lahore",
        Country: "Pakistan",
        state: "Lahore"
    },
    {
        date: "10-11-2010 10:09 AM",
        siteName: "Cycarts.com",
        TicketNumber: 123455,
        type: "customer",
        serverity: 3,
        ID: "123sdab",
        address: "House R/12, Model Town",
        city: "Lahore",
        Country: "Pakistan",
        state: "Lahore"
    },
    {
        date: "10-11-2010 10:09 AM",
        siteName: "Cycarts.com",
        TicketNumber: 123455,
        type: "customer",
        serverity: 3,
        ID: "123sdab",
        address: "House R/12, Model Town",
        city: "Lahore",
        Country: "Pakistan",
        state: "Lahore"
    },
]


const ConfirmTickets = () => {
    return (
        <>
            <motion.div
                exit={{
                    x: '-100vw',
                    transition: { ease: 'easeInOut' }
                }}
                className="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3 ">

                <div className="card-body">

                    <Raw title="Confirmed Tickets Tickets" />

                    <table className="min-w-full text-sm border border-gray-100 divide-y-2 divide-gray-200">
                        <thead >
                            <tr>

                                {/* <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    <div className="flex items-center">
                                        Date Closed
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-4 h-4 ml-1.5 text-gray-700"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </th> */}
                                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    <div className="flex items-center">
                                        Site Name

                                    </div>
                                </th>
                                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    <div className="flex items-center">
                                        Ticket No#
                                    </div>
                                </th>
                                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    <div className="flex items-center">
                                        Type
                                    </div>
                                </th>
                                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    <div className="flex items-center">
                                        Severity
                                    </div>
                                </th>

                                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    <div className="flex items-center">
                                        ID
                                    </div>
                                </th>
                                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    <div className="flex items-center">
                                        Address
                                    </div>
                                </th>

                                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    <div className="flex items-center">
                                        City
                                    </div>
                                </th>
                                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    <div className="flex items-center">
                                        State
                                    </div>
                                </th>

                                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">
                                    <div className="flex items-center">
                                        Country
                                    </div>
                                </th>
                                <th className="p-4 font-medium text-left text-gray-900 whitespace-nowrap">

                                </th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-100">
                            {
                                data.map((x, index) => <tr key={index} className="hover:shadow-md">
                                    {/* <td className="p-4 font-medium text-pink-800 whitespace-nowrap">
                                        {x.date}
                                    </td> */}
                                    <td className="p-4 text-gray-700 whitespace-nowrap">{x.siteName}</td>
                                    <td className="p-4 text-gray-700 whitespace-nowrap">
                                        <strong
                                            className="bg-red-100 text-red-700 px-3 py-1.5 rounded text-xs font-medium"
                                        >
                                            {x.TicketNumber}
                                        </strong>
                                    </td>
                                    <td className="p-4 text-gray-700 whitespace-nowrap">
                                        {x.type}
                                    </td>
                                    <td className="p-4 text-gray-700 whitespace-nowrap text-center">{x.serverity}</td>
                                    <td className="p-4 text-gray-700 whitespace-nowrap">{x.ID}</td>
                                    <td className="p-4 text-gray-700 whitespace-nowrap">{x.address}</td>
                                    <td className="p-4 text-gray-700 whitespace-nowrap">{x.city}</td>
                                    <td className="p-4 text-gray-700 whitespace-nowrap">{x.state}</td>
                                    <td className="p-4 text-gray-700 whitespace-nowrap">{x.Country}</td>

                                    <td className="p-4 text-red-700 text-2xl cursor-pointer whitespace-nowrap">
                                        <RiDeleteBack2Line />
                                    </td>

                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>


            </motion.div>
            <div className="mr-auto my-5">
                <Pagination />
            </div>
            <Footer />
        </>
    )
}

export default ConfirmTickets