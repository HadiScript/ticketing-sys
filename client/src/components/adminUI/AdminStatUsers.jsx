import React from 'react'

import { ImUsers } from 'react-icons/im'
import { MdVerifiedUser } from 'react-icons/md'


const AdminStatUsers = () => {
    return (
        <section className="p-2 bg-white text-darkTo">
            <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-1 xl:grid-cols-2">


                <div className="flex  space-x-4 rounded-lg md:space-x-6 bg-white text-darkTo">
                    <div className="flex justify-center  align-middle rounded-lg sm:p-4 bg-darkFrom text-gray-100">
                        <MdVerifiedUser className='text-5xl' />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none">10</p>
                        <p className="capitalize font-bold">Agents (admin)</p>
                    </div>
                </div>
                <div className="flex  space-x-4 rounded-lg md:space-x-6 bg-white text-darkTo">
                    <div className="flex justify-center  align-middle rounded-lg sm:p-4 bg-darkFrom text-gray-100">
                        <ImUsers className='text-5xl' />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none">43</p>
                        <p className="capitalize font-bold">Users (Clients)</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminStatUsers