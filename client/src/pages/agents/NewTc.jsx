import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listTickets } from '../../actions/ticketAction'
import { Link } from 'react-router-dom'
// import {} from ''


const NewTc = () => {

    const dispatch = useDispatch()


    const { userInfo } = useSelector((state) => state.userLogin)
    const ticketList = useSelector((state) => state.ticketList)
    const { loading, error, tickets, } = ticketList


    console.log(tickets, "here are tickets")


    useEffect(() => {
        dispatch(listTickets())

    }, [dispatch])




    return (
        <div className="container mx-auto ">
            {userInfo.isAgent && "agent"}
            {JSON.stringify(tickets, null, 2)}
            {
                tickets.map(x => <div className='' key={x._id}>
                    {!x.isPicked && <h1 className='text-red-500'>"not picked yet"</h1>}
                </div>)
            }

            <div className="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
                <div className="card-body">

                    {loading && <p> Loading... </p>}
                    {error && <p> {error} </p>}

                    <section className="text-gray-600 body-font overflow-hidden">

                        <h3 className='text-gray-700 pt-5 text-xl font-bold' >Not picked yet</h3>
                        <div className="container px-5 py-10 mx-auto">

                            <div className="-my-8 divide-y-2 divide-gray-100">
                                {
                                    tickets.map((item, index) => <div key={index} className="py-8 flex flex-wrap md:flex-nowrap">
                                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span className="font-semibold title-font text-gray-700">{item.category}</span>
                                            <span className="mt-1 text-gray-500 text-sm">{item.createdAt}</span>
                                        </div>
                                        <div className="md:flex-grow">
                                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{item.problem}</h2>
                                            <p className="leading-relaxed">{item.description}</p>
                                            <Link to={`/detail-discussion/${item._id}`} className="text-indigo-500 inline-flex items-center mt-4">Detail & Discussion
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                    )
                                }
                            </div>
                        </div>
                    </section>

                </div>
            </div>


        </div>
    )
}

export default NewTc