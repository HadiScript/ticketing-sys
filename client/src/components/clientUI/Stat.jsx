import React from 'react'
import { Link } from 'react-router-dom'


import { useSpring, animated } from 'react-spring';
import { BsCheck2All } from 'react-icons/bs'
import { IoIosTimer } from 'react-icons/io'
import { GiConfirmed } from 'react-icons/gi'




const Stat = () => {

    const TotalTicket = useSpring({ val: 250, from: { val: 0 } });
    const pendingTickets = useSpring({ val: 100, from: { val: 0 } });
    const confiredTickets = useSpring({ val: 150, from: { val: 0 } });

    return (
        <div className="stats  bg-transparent  w-full">

            <div className="stat place-items-center bg-transparent   ">
                <div className="flex justify-between items-center">
                    <BsCheck2All className="text-3xl text-white hover:font-extra-bold  " />
                    <div className=" text-gray-200 ml-2">Total Tickets</div>
                </div>
                <div className="stat-value text-white">
                    <animated.div classNameName="number text-white">
                        {TotalTicket.val.interpolate(val => Math.floor(val))}
                    </animated.div>
                </div>
                <div className="stat-desc"></div>

            </div>

            <div className="stat place-items-center bg-transparent  ">
                <div className="flex justify-between items-center">

                    <IoIosTimer className="text-3xl text-white hover:font-extra-bold " />
                    <div className="ml-2 text-gray-200">Pending Tickets</div>
                </div>
                <div className="stat-value text-white">
                    <animated.div classNameName="number text-white">
                        {pendingTickets.val.interpolate(val => Math.floor(val))}
                    </animated.div>
                </div>
                <Link to="/" className="stat-desc text-gray-300 underline" > details </Link>
            </div>

            <div className="stat place-items-center bg-transparent   ">
                <div className="flex flex-justify-between items-center">
                    <GiConfirmed className="text-3xl text-white hover:font-extra-bold " />
                    <div className="text-gray-200 ml-2">Confrim Tickets</div>
                </div>
                <div className="stat-value text-white">
                    <animated.div classNameName="number text-white">
                        {confiredTickets.val.interpolate(val => Math.floor(val))}
                    </animated.div>
                </div>
                <Link to="/" className="stat-desc text-gray-300 underline" > details </Link>
                {/* <div className="stat-desc text-gray-300 underline"> details </div> */}
            </div>

        </div>
    )
}

export default Stat