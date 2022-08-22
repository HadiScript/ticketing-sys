import React, { useState } from 'react'

import { FiArrowRight, FiLogIn } from 'react-icons/fi'
import { ImHome, ImUpload2, ImProfile } from 'react-icons/im'
import { BsCheck2All, BsListNested, BsCalendarEvent, BsGraphUp } from 'react-icons/bs'
import { MdOutlinePendingActions, MdOutlineFeedback } from 'react-icons/md'

import { Link } from 'react-router-dom'


const Layout = ({ mobile, setmobile }) => {


    const [open, setOpen] = useState(true);
    const Menus = [

        { title: "Submit Tickets", route: "form", Icon: ImUpload2, gap: true },
        { title: "All Tickets ", route: "all/tickets", Icon: BsListNested },
        { title: "Pending Tickets", route: "pending/tickets", Icon: MdOutlinePendingActions },
        { title: "Comfirmed Tickets", route: "confirm/tickets", Icon: BsCheck2All },
        { title: "Track Your Ticket", route: "track/tickets", Icon: BsGraphUp },

        { title: "Feedback ", route: "feedback", Icon: MdOutlineFeedback, gap: true },
        { title: "Events", route: "events", Icon: BsCalendarEvent, },
        { title: "Login", route: "login", Icon: FiLogIn, },
    ];

    return (<>

        <div
            className={` sticky top-0 ${open ? "w-72" : "w-20 "
                } bg-gradient-to-r from-purple-700 to-purple-900 h-screen p-5  pt-8 relative duration-300`}
        >
            <FiArrowRight
                src="./src/assets/control.png"
                className={`absolute cursor-pointer -right-3 top-9 w-7 h-7 border-dark-purple text-dark-purple text-xl bg-white
             border-2 rounded-full  ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)}
            />


            <div className="flex gap-x-4 items-center">
                <Link to="/">
                    <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                        Tickets-Cycarts
                    </h1>
                </Link>

            </div>
            <ul className="pt-6">
                <li
                    className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
               bg-light-white
                        } `}
                >
                    <Link to='/' >
                        <ImHome className="text-xl" />
                    </Link>
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                        <Link to='/' >  Home </Link>
                    </span>
                </li>



                {Menus.map((Menu, index) => (

                    <li
                        key={index}
                        className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} 
                            } `}
                    >
                        <Link to={`/${Menu.route}`} >
                            <Menu.Icon className="text-xl" />
                        </Link>
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            <Link to={`/${Menu.route}`} > {Menu.title} </Link>
                        </span>
                    </li>

                ))}
            </ul>
        </div>
    </>
    )
}

export default Layout
