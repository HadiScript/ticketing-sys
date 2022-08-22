import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { ticketDetails } from '../../actions/ticketAction'
import { API } from '../../API/Api'

import { toast } from 'react-toastify'


const AgentDetailDiscussion = () => {

    const { id } = useParams()
    const dispatch = useDispatch();
    const { ticket, loading, error } = useSelector(state => state.ticketDetail);
    const { userInfo } = useSelector(state => state.userLogin)

    const [onWorking, setOnWorking] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        dispatch(ticketDetails(id));
    }, [dispatch, id])

    const commentSubmit = async (e) => {
        e.preventDefault();
        // console.log(text, 'comment')
        try {
            const { data } = await axios.put(`${API}/tc/add-comments`, { tcId: ticket._id, text }, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`,
                }
            })
            console.log(data)
            toast.success("add")
            setText('');
            dispatch(ticketDetails(id));


        } catch (error) {
            toast.error(error)
            console.log(error)
        }

    }


    return (
        <div className="container mx-auto ">
            {/* {error && <p>{error}</p>}
            {loading && <p>loading...</p>}
            {JSON.stringify(ticket)} */}


            {loading ? <p>loading...</p> : <div className="overflow-x-auto ">
                <div className="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
                    <section className='card-body' >
                        <div className="relative max-w-screen-xl px-4 py-8 mx-auto">


                            <div className="grid gap-8 lg:items-start lg:grid-cols-3">
                                <div className="lg:col-span-2">
                                    <div className="relative mt-4">
                                        <div>
                                            <h1 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                                                Ticket: #{ticket.TicketNumber}
                                            </h1>

                                            <p className="mt-1 text-sm text-gray-500">
                                                ID: {id}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-5 hover:shadow-md">
                                        <span className='text-underline font-bold '>Problem</span> :  {ticket.problem}
                                        <hr />
                                    </div>
                                    <div className="mt-5 hover:shadow-md">
                                        <span className='text-underline font-bold '>Description</span> : <br /> {ticket.description}
                                        <hr />
                                    </div>
                                    <div className="mt-5 hover:shadow-md">
                                        <span className='text-underline font-bold '>Category</span> :  {ticket.category}
                                        <hr />
                                    </div>

                                    <div className="mt-5 hover:shadow-md">
                                        <span className='text-underline font-bold '>Type</span> :  {ticket.type}
                                        <hr />
                                    </div>

                                    <form action="" className="mt-5">
                                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                            <span className="mr-3">Status</span>
                                            <div className="flex items-center">
                                                <div className="form-control">
                                                    <label className="label cursor-pointer">
                                                        <span className="label-text text-gray-800 mr-2 ">On Working</span>
                                                        <input type="checkbox" checked={onWorking} onChange={e => setOnWorking(!onWorking)} className="checkbox border border-gray-500" />
                                                    </label>
                                                </div>
                                            </div>

                                            {/* <div className="flex items-center">
                                                <div className="form-control">
                                                    <label className="label cursor-pointer">
                                                        <span className="label-text text-gray-800 mr-2 ">Pending</span>
                                                        <input type="checkbox" className="checkbox border border-gray-500" />
                                                    </label>
                                                </div>
                                            </div> */}

                                            {/* <div className="flex items-center">
                                                <div className="form-control">
                                                    <label className="label cursor-pointer">
                                                        <span className="label-text text-gray-800 mr-2 ">Confirm</span>
                                                        <input type="checkbox" className="checkbox border border-gray-500" />
                                                    </label>
                                                </div>
                                            </div> */}
                                        </div>
                                        <button className=' p-2 rounded-md text-white w-20 bg-gray-900 hover:bg-gray-800' type="submit">save</button>
                                    </form>
                                </div>



                                {loading ? <p>loading...</p> : <div className="lg:top-0 lg:sticky bg-gray-800 rounded-md p-2 " >
                                    <form className="space-y-4 lg:pt-8 " onSubmit={commentSubmit}>

                                        <div className="grid items-center  grid-cols-6 ">
                                            <div className="col-span-5">
                                                <input value={text} onChange={e => setText(e.target.value)} type="text" placeholder='comments' className='p-2 text-xl text-gray-800 outline-none rounded-md' />
                                            </div>

                                            <button type='submit' className="cursor-pointer btn col-span-1">
                                                send
                                            </button>
                                        </div>
                                    </form>
                                    {
                                        ticket.privateComments && ticket.privateComments.map(x => <div className={`mt-2  ${x.postedBy.isAgent ? `ml-5 bg-gray-700 text-white` : `mr-2`}`} key={x._id}>
                                            <p className='bg-white'>{x.text} {JSON.stringify(x.postedBy)}</p>
                                            <p className='bg-white'>{x.postedBy.isAgent === true && 'true'}</p>
                                            <hr />
                                        </div>
                                        )
                                    }
                                </div>}


                            </div>
                        </div>


                    </section>



                </div>
            </div >}
        </div >
    )
}

export default AgentDetailDiscussion