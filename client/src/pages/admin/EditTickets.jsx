import React, { useState } from 'react'

import { IoMdSend } from 'react-icons/io'
import { TiArrowBack } from 'react-icons/ti'
import { useParams, Link } from 'react-router-dom'

import Footer from '../../components/UI/Footer';
import Navbar from '../../components/UI/Navbar';
import data from '../../data/data';

import './css/index.css'

const chatting = [
    {
        name: "hadi",
        isAdmin: false,
        message: "i have a issue in hosting"
    },
    {
        name: "ali",
        isAdmin: true,
        message: "Sir, we are working on it. You will be notified soon."
    },


]



const EditTickets = () => {
    const id = "123sdab"
    const list = data.find(x => x.id === '123sdab')

    return (
        <>
            <div className="container mx-auto ">
                <div className="overflow-x-auto ">
                    <div className="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
                        <section className='card-body' >
                            <div className="relative max-w-screen-xl px-4 py-8 mx-auto">


                                <div className="grid gap-8 lg:items-start lg:grid-cols-4">
                                    <div className="lg:col-span-3">
                                        <div className="relative mt-4">
                                            <div>
                                                <h1 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                                                    Ticket: #{list.TicketNumber}
                                                </h1>

                                                <p className="mt-1 text-sm text-gray-500">
                                                    ID: {id}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-5 hover:shadow-md">
                                            <span className='text-underline font-bold '>Problem</span> :  {list.problem}
                                            <hr />
                                        </div>
                                        <div className="mt-5 hover:shadow-md">
                                            <span className='text-underline font-bold '>Description</span> : <br /> {list.description}
                                            <hr />
                                        </div>
                                        <div className="mt-5 hover:shadow-md">
                                            <span className='text-underline font-bold '>Category</span> :  {list.category}
                                            <hr />
                                        </div>

                                        <div className="mt-5 hover:shadow-md">
                                            <span className='text-underline font-bold '>Type</span> :  {list.type}
                                            <hr />
                                        </div>

                                        <form action="" className="mt-5">
                                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                                <span className="mr-3">Status</span>
                                                <div className="flex items-center">
                                                    <div className="form-control">
                                                        <label className="label cursor-pointer">
                                                            <span className="label-text text-gray-800 mr-2 ">On Working</span>
                                                            <input type="checkbox" className="checkbox border border-gray-500" />
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="flex items-center">
                                                    <div className="form-control">
                                                        <label className="label cursor-pointer">
                                                            <span className="label-text text-gray-800 mr-2 ">Pending</span>
                                                            <input type="checkbox" className="checkbox border border-gray-500" />
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="flex items-center">
                                                    <div className="form-control">
                                                        <label className="label cursor-pointer">
                                                            <span className="label-text text-gray-800 mr-2 ">Confirm</span>
                                                            <input type="checkbox" className="checkbox border border-gray-500" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className=' p-2 rounded-md text-white w-20 bg-gray-900 hover:bg-gray-800' type="submit">save</button>
                                        </form>
                                    </div>

                                    <div className="lg:top-0 lg:sticky bg-gray-800 rounded-md p-2 " style={{ overflowY: "scroll", height: "500px" }}>
                                        <form className="space-y-4 lg:pt-8 ">
                                            <fieldset>
                                                <legend className="text-lg font-bold text-white">
                                                    Comments
                                                </legend>

                                                <div className="flex flex-row mt-2 space-x-1 text-white">
                                                    status: <span className="underline ml-2 italic font-bold"> Pending</span>
                                                </div>
                                            </fieldset>

                                            {
                                                chatting.map(x => <div className={`scroll-ml-28 border-none p-4 ${x.isAdmin ? `bg-gray-400 ml-5` : `bg-gray-200`} border rounded mr-5`}>
                                                    <p className="text-sm">
                                                        <span className="block">
                                                            Pay as low as $3/mo with 0% APR.
                                                        </span>

                                                        <a href="" className="inline-block mt-1 underline">
                                                            Find out more
                                                        </a>
                                                    </p>
                                                </div>)
                                            }



                                            <div className="grid items-center grid-cols-4 w-full">
                                                <div className="col-span-3">
                                                    <input type="text" className='p-2 text-xl text-gray-800 outline-none rounded-md' />
                                                </div>
                                                <div className="text-xl cursor-pointer">
                                                    <IoMdSend />
                                                </div>
                                            </div>
                                        </form>
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

export default EditTickets