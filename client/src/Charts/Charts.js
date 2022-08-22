import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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



const Charts = () => {

    return (
        <div className="w-full card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
            <div className="w-full card-body">
                {/* 
                <LineCharts /> */}
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 lg:w-1/2 w-full cursor-pointer ">
                        <div className="hover:shadow-md h-full bg-gray-50 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 20,
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
                                    <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                                    <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
                                    <Bar dataKey="uv" fill="#ffc658" />
                                </BarChart>
                            </ResponsiveContainer>

                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}

export default Charts