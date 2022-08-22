import React from 'react'

import { GoSignIn } from 'react-icons/go'
import { GiConfirmed } from 'react-icons/gi'
import { FiMessageSquare, FiLogIn } from 'react-icons/fi'
import { FcFeedback } from 'react-icons/fc'
import { ImHome, ImUpload2, ImUsers } from 'react-icons/im'
import { BsCheck2All, BsListNested, BsCalendarEvent, BsGraphUp } from 'react-icons/bs'
import {
    MdOutlinePendingActions,
    MdOutlineFeedback,
    MdVerifiedUser,
    MdSpaceDashboard,
    MdOutlineContacts,
    MdPendingActions
} from 'react-icons/md'

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'



const Sidebar = ({ open, setOpen }) => {

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin


    const adminMenuList = [

        { title: "Admin Dashboard", route: "admin/dashboard", Icon: MdSpaceDashboard, gap: true },
        { title: "Users ", route: "users", Icon: ImUsers, },
        { title: "Agents ", route: "admins/users", Icon: MdVerifiedUser, },
        { title: "Pending Tc", route: "pending-tickets", Icon: MdPendingActions },
        { title: "Closed Tc", route: "confirm-tickets", Icon: GiConfirmed },
        { title: "All Messages", route: "all/messages", Icon: FiMessageSquare, gap: true },
        { title: "All Feedbacks", route: "all/feedbacks", Icon: FcFeedback, },
    ];



    const agentsMenuList = [

        { title: "New Tc", route: "agents/newTc", Icon: MdSpaceDashboard, gap: true },
        { title: "Working", route: "agents/workingTc", Icon: MdSpaceDashboard },
        { title: "Closed Tc", route: "agents/closedTc", Icon: MdSpaceDashboard },
    ];

    const clientMenuList = [
        { title: "Home", route: "", Icon: ImHome, },

        { title: "Submit Tickets", route: "form", Icon: ImUpload2, gap: true },
        { title: "All Tickets ", route: "all/tickets", Icon: BsListNested },
        { title: "Pending Tickets", route: "pending/tickets", Icon: MdOutlinePendingActions },
        { title: "Comfirmed Tickets", route: "confirm/tickets", Icon: BsCheck2All },
        { title: "Track Your Ticket", route: "track/tickets", Icon: BsGraphUp },

        { title: "Events", route: "events", Icon: BsCalendarEvent, },
        { title: "Feedback ", route: "feedback", Icon: MdOutlineFeedback, },
        { title: "Contact Us", route: "contact-us", Icon: MdOutlineContacts, gap: true },


    ]

    const withoutLoginList = [
        { title: "Login", route: "login", Icon: FiLogIn, gap: true },
        { title: "Register", route: "signup", Icon: GoSignIn },
    ]


    return (
        <div
            className={`
           
            bg-gradient-to-r from-darkFrom to-darkTo
            text-white
            w-60
          
            px-2
            py-4
            space-y-6
            absolute inset-0 left-0
            md:relative
            md:-translate-x-0
            transform -translate-x-full
            transition duration-300 ease-in-out
          

            ${open && `relative -translate-x-0`}

                    `}
        >


            <motion.div
                initial={{ y: -250 }}
                animate={{
                    y: -10
                }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                drag
                dragElastic={0.5} className="flex gap-x-4 items-center ml-5">
                {/* <Link to="/"> */}
                <h1
                    className={`text-white origin-left font-medium text-xl duration-200 `}
                >
                    Tickets-Cycarts
                </h1>
                {/* </Link> */}

            </motion.div>
            <ul className="pt-6" onClick={() => setOpen(!open)} >
                {userInfo && !userInfo.isAdmin && !userInfo.isAgent && clientMenuList.map((Menu, index) => (

                    <Link to={`/${Menu.route}`} >
                        <motion.li
                            drag dragElastic={0.5}
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} 
                            } `}
                        >
                            <Menu.Icon className="text-xl" />
                            <span className={` origin-left duration-200`}>
                                <Link to={`/${Menu.route}`} > {Menu.title} </Link>
                            </span>
                        </motion.li>
                    </Link>

                ))}

                {userInfo && userInfo.isAgent && agentsMenuList.map((Menu, index) => (

                    <Link to={`/${Menu.route}`} >
                        <motion.li
                            drag dragElastic={0.5}
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
${Menu.gap ? "mt-9" : "mt-2"} 
        } `}
                        >
                            <Menu.Icon className="text-xl" />
                            <span className={` origin-left duration-200`}>
                                <Link to={`/${Menu.route}`} > {Menu.title} </Link>
                            </span>
                        </motion.li>
                    </Link>

                ))}

                {userInfo && userInfo.isAdmin && adminMenuList.map((Menu, index) => (

                    <Link to={`/${Menu.route}`} >
                        <motion.li
                            key={index}
                            className={`
                            flex
                            rounded-md
                            p-2
                            cursor-pointer
                            hover:bg-light-white
                            text-gray-300
                            text-sm
                            items-center
                            gap-x-4 
                            ${Menu.gap ? "mt-9" : "mt-2"} 
        } `}
                        >
                            <Menu.Icon className="text-xl" />
                            <span className={` origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </motion.li>
                    </Link>

                ))}

                {userInfo === null && withoutLoginList.map((Menu, index) => (

                    <motion.li
                        drag dragElastic={0.5}
                        key={index}
                        className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
${Menu.gap ? "mt-9" : "mt-2"} 
        } `}
                    >
                        <Link to={`/${Menu.route}`} >
                            <Menu.Icon className="text-xl" />
                        </Link>
                        <span className={` origin-left duration-200`}>
                            <Link to={`/${Menu.route}`} > {Menu.title} </Link>
                        </span>
                    </motion.li>

                ))}
            </ul>



        </div >
    )
}

export default Sidebar