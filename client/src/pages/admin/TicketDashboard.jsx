import React from 'react'
import {
    Link
} from 'react-router-dom'

import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, } from 'recharts';


import { useSpring, animated } from 'react-spring';

import Footer from '../../components/UI/Footer'
import AdminStatUsers from '../../components/adminUI/AdminStatUsers'
// import PeiChart from '../../components/adminUI/PeiChart'

import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';



const data = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];


const data01 = [
    { name: 'Total Tickets', value: 250 },
    { name: 'Confirmed Tickets', value: 150 },
    { name: 'Pending Tickets', value: 100 },
];

const TicketDashboard = () => {

    const TotalTicket = useSpring({ val: 250, from: { val: 0 } });
    const pendingTickets = useSpring({ val: 100, from: { val: 0 } });
    const confiredTickets = useSpring({ val: 150, from: { val: 0 } });

    return (
        <>


            <motion.div
                exit={{
                    x: '-100vw',
                    transition: { ease: 'easeInOut' }
                }}
                className="container mx-auto">

                <div className="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
                    <div className="card-body">

                        <div className="flex flex-wrap -m-4">
                            <div className=" lg:w-1/3 w-full cursor-pointer ">
                                <div className="hover:shadow-md h-full bg-gray-50 bg-opacity-75  rounded-lg overflow-hidden text-center relative">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart width="100%" height="100%">
                                            <Pie
                                                dataKey="value"
                                                isAnimationActive={false}
                                                startAngle={360}
                                                endAngle={0}
                                                data={data01}
                                                innerRadius={60}
                                                outerRadius={80}
                                                fill="#040e34"
                                                paddingAngle={5}
                                                label
                                            />
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>

                                </div>
                            </div>


                            <div className=" lg:w-1/3 w-full cursor-pointer ">
                                <div className="hover:shadow-md h-full bg-gray-50 bg-opacity-75  rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">TICKETS</h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-darkFrom mb-3">
                                        Confirm Tickets
                                    </h1>
                                    <p className="font-bold text-9xl mb-10">
                                        <animated.div className="number text-sky-800">
                                            {confiredTickets.val.interpolate(val => Math.floor(val))}
                                        </animated.div>
                                    </p>
                                    <Link to="/confirm-tickets" className="text-indigo-500 inline-flex items-center">Detail
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>

                                </div>
                            </div>


                            <div className=" lg:w-1/3 w-full cursor-pointer ">
                                <div className="hover:shadow-md h-full bg-gray-50 bg-opacity-75  rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">TICKETS</h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-darkFrom mb-3">
                                        Pending Tickets
                                    </h1>
                                    <p className="font-bold text-9xl mb-10">
                                        <animated.div className="number text-amber-900">
                                            {pendingTickets.val.interpolate(val => Math.floor(val))}
                                        </animated.div>
                                    </p>
                                    <Link to="/pending-tickets" className="text-indigo-500 inline-flex items-center">Detail
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3" >
                    <div className='w-full card-body' style={{ height: "500px" }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={250}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#040e34" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="#040e34" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                </div>

                <div className="card lg:card-side mt-5 mx-2 bg-white shadow-xl ">
                    <div className="card-body">
                        <AdminStatUsers />
                    </div>
                </div>


            </motion.div>


            <Footer />
        </>
    )
}

export default TicketDashboard