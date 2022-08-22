import React, { useState } from 'react'
import axios from 'axios'

import { motion } from 'framer-motion'
import Step from '../../../components/clientUI/Step'
import { useDispatch, useSelector } from 'react-redux'
import { createTicket } from '../../../actions/ticketAction'
import { useNavigate } from 'react-router-dom'


const Problem = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const createdTc = useSelector(state => state.createTicket)
    const { error, loading } = createdTc

    const [problem, setProblem] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [uploading, setUploading] = useState(false)


    const form1 = JSON.parse(localStorage.getItem('form1'))
    const form2 = JSON.parse(localStorage.getItem('form2'))

    let cats = form2.deploy ? "deploy" : form2.hosting ? "hosting" : ""

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }

            const { data } = await axios.post('http://localhost:8080/tc/upload', formData, config)

            setImage(data)
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    let data = {
        name: form1.name,
        email: form1.email,
        state: form1.state,
        city: form1.city,
        country: form1.country,

        category: cats,

        problem,
        description,
        image
    }

    const submitTickets = e => {
        e.preventDefault();

        console.log(data);
        dispatch(createTicket(data))
        navigate('/all/tickets')
    }


    return (
        <>

            <motion.div
                exit={{
                    x: '-100vw',
                    transition: { ease: 'easeInOut' }
                }}
                className="container mx-auto ">

                {error && <p> {error} </p>}
                {loading && <p> loading... </p>}

                <div className="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
                    <div className="card-body">
                        {/* <Link to="/"> <MdOutlineKeyboardBackspace className='text-xl' /> </Link> */}


                        {/* <div className='col-span-2 text-center mx-auto'>
                                    </div> */}
                        <Step step3 />

                        <section >
                            <form onSubmit={submitTickets}>
                                <div className="grid grid-cols-1  gap-6 mt-4 sm:grid-cols-2">
                                    <div className='col-span-2'>
                                        <label className="text-gray-700 " for="username">Problem:</label>
                                        <input value={problem} onChange={e => setProblem(e.target.value)} required id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                    <div className='col-span-2'>
                                        <label className="text-gray-700 " for="username">Description</label>
                                        <textarea value={description} onChange={e => setDescription(e.target.value)} maxLength={200} required id="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>


                                    <div className='col-span-2'>
                                        <label className="text-gray-700 " for="username">Any snapshot</label>
                                        {uploading && <p> loading... </p>}
                                        <input onChange={uploadFileHandler} required id="username" type="file" className="block w-full px-4 py-2 mt-2 text-gray-700  border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                    </div>

                                </div>
                                <div className="flex justify-end mt-6">
                                    <button className="btn bg-darkTo hover:bg-darkFrom text-white">Submit Ticket</button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </motion.div>


            {/* <Footer /> */}
        </>
    )
}

export default Problem