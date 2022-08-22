import React from 'react'

import { useParams, Link } from 'react-router-dom'

import Footer from '../../components/UI/Footer'

import data from '../../data/data'

const TicketDetails = () => {

    const { id } = useParams();

    const list = data.find(i => i.id === id)

    return (
        <>
            <div className="container mx-auto ">

                <div
                    className="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
                    <div className="card-body">

                        <section className="text-gray-600 body-font overflow-hidden">
                            <div className="">
                                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                    {
                                        list.image &&
                                        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
                                    }
                                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                        <h2 className="text-sm title-font text-gray-500 tracking-widest capitalize">{list.category}</h2>
                                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                            {list.problem}
                                        </h1>

                                        <p className="leading-relaxed">
                                            {list.description}
                                        </p>




                                        <div className="flex mt-5">
                                            <Link to="/pending-tickets" >
                                                <button className='btn bg-darkFrom btn-block text-white'>
                                                    Back
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TicketDetails