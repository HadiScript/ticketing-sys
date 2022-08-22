import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { ticketDetails, deletingTicket } from '../../actions/ticketAction';

import { Link } from 'react-router-dom'

const ClientTicketDetails = () => {

    const { id } = useParams();

    const dispatch = useDispatch()

    const deleteTicket = useSelector(state => state.ticketDelte)
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = deleteTicket

    const ticketDetail = useSelector((state) => state.ticketDetail)
    const { loading, error, ticket } = ticketDetail


    useEffect(() => {
        dispatch(ticketDetails(id))
    }, [dispatch, id, successDelete])


    const deleteHandler = (id) => {
        if (window.confirm('Are you sure ?')) {
            dispatch(deletingTicket(id))
        }
    }
    return (
        <div className="container mx-auto ">
            <div className="overflow-x-auto ">
                <div className="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">

                    <Link to="/all/tickets" className='p-3 mb-5'> back </Link>

                    <section className='card-body mt-5' >
                        {error && <p> {error} </p>}
                        {loading && <p> loading... </p>}

                        {
                            loadingDelete && <p> loading.. </p>
                        }
                        {errorDelete && <p>{errorDelete}</p>}

                        <div className="flex items-center">
                            <h1 className='text-xl font-bold' >  ID# <span className="text-darkFrom">{ticket._id}</span> </h1>
                        </div>
                        <span> Status :<span className='text-blue-700'> {ticket.pending ? "pending" : ticket.onWorking ? "On Working" : "Confirmed"} </span>  </span>
                        <hr />

                        <h1 className='text-2xl font-bold text-gray-800'> {ticket.problem} </h1>
                        <span> {ticket.description} </span>



                        <button onClick={deleteHandler} className='flex justify-end mt-5 text-red-700 underline'> Delete </button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default ClientTicketDetails