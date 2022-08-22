import React from 'react'
import Stat from '../../components/clientUI/Stat'
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Footer from '../../components/UI/Footer'

import { motion } from 'framer-motion'




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
    { name: 'Total Tickets', value: 400 },
    { name: 'Confirmed Tickets', value: 250 },
    { name: 'Pending Tickets', value: 150 },
];

const COLORS = ['#1e1e1e', '#040e34'];

const ClientDashboard = () => {
    return (
        <>

            <motion.div
                exit={{
                    x: '-100vw',
                    transition: { ease: 'easeInOut' }
                }}
                className="container mx-auto ">


                <div className="card lg:card-side mt-5 bg-gradient-to-r from-darkFrom to-darkTo shadow-xl mx-3">
                    <div className="card-body">
                        <Stat />
                    </div>
                </div>

                <div className=" card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
                    <div className=" card-body">
                        <div className="flex flex-wrap -m-4">
                            <div className="p-4 lg:w-1/2 w-full cursor-pointer ">
                                <div style={{ height: '250px' }} className="w-full hover:shadow-md  bg-gray-50 bg-opacity-75 rounded-lg overflow-hidden text-center relative">
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

                                            {data01.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                            <Tooltip />
                                        </PieChart>
                                    </ResponsiveContainer>

                                </div>
                            </div>


                            <div className="p-4 lg:w-1/2 w-full cursor-pointer ">
                                <div style={{ height: '250px' }} className="w-full hover:shadow-md  bg-gray-50 bg-opacity-75 rounded-lg overflow-hidden text-center relative">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <BarChart
                                            width={500}
                                            height={300}
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
                                            <Bar dataKey="pv" fill="#32415e" />
                                            <Bar dataKey="uv" fill="#040e34" />
                                        </BarChart>
                                    </ResponsiveContainer>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>



                {/* <div className=" card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3" >
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

                </div> */}


                <div className="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
                    <div className="card-body">
                        <section className="text-gray-600 body-font overflow-hidden">

                            <h3 className='text-gray-700 ml-5 pt-5 text-xl font-bold' >Recent Tickets</h3>
                            <div className="container px-5 py-10 mx-auto">

                                <div className="my-8 divide-y-2 divide-gray-100">
                                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span className="font-semibold title-font text-gray-700">HOSTING</span>
                                            <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                                        </div>
                                        <div className="md:flex-grow">
                                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Problem in hosting node app</h2>
                                            <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                                            <a href='/' className="text-indigo-500 inline-flex items-center mt-4">Edit
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span className="font-semibold title-font text-gray-700">HOSTING</span>
                                            <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                                        </div>
                                        <div className="md:flex-grow">
                                            <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Problem in hosting node app</h2>
                                            <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                                            <a href='/' className="text-indigo-500 inline-flex items-center mt-4">Edit
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* <Raw /> */}
            </motion.div>
            <Footer />
        </>
    )
}

export default ClientDashboard