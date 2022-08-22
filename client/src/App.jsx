import React, { useEffect, useState } from 'react'

import AOS from "aos";

import Login from './pages/common/Login'
import Register from './pages/common/Register'

import { Routes, Route, useLocation } from "react-router-dom";

import TicketDashboard from './pages/admin/TicketDashboard';
import ConfirmTickets from './pages/admin/ConfrimTickets';
import PendingTickets from './pages/admin/PendingTickets';
import ClientPendingTickets from './pages/client/ClientPendingTicket';
import ClientConfirmTickets from './pages/client/ClientComfrimTickets';
import TotalTickets from './pages/admin/TotalTickets';
import TicketDetails from './pages/admin/TicketDetails';
import EditTickets from './pages/admin/EditTickets';
import ClientDashboard from './pages/client/ClientDashboard';
import Form1 from './pages/client/from/Form1';
import Address from './pages/client/from/Address';
import Category from './pages/client/from/Category';
import Problem from './pages/client/from/Problem';

import { AnimatePresence } from 'framer-motion'


// import Layout from './components/UI/Layout';
import Sidebar from './components/UI/Sidebar';
import AllTickets from './pages/client/AllTickets';
import Feedback from './pages/common/Feedback';
import Events from './pages/common/Events';
import Track from './pages/client/Track';
import TrackById from './pages/client/TrackById';
import ProfileUser from './pages/client/ProfileUser';
import Navbar from './components/UI/Navbar';

import "aos/dist/aos.css";
import AllUsers from './pages/admin/AllUsers';
import AllAgents from './pages/admin/AllAgents';
import ContactUs from './pages/common/ContactUs';
import EditUser from './pages/admin/EditUser';
import AllMessages from './pages/admin/AllMessages';
import AllFeedbacks from './pages/admin/AllFeedbacks';

import ClientTicketDetails from './pages/client/ClientTicketDetails';
import NewTc from './pages/agents/NewTc';
import OnWorkingTc from './pages/agents/OnWorkingTc';
import ClosedTc from './pages/agents/ClosedTc';
import AgentDetailDiscussion from './pages/agents/AgentDetailDiscussion';


import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const App = () => {

    const location = useLocation()


    const [open, setOpen] = useState(true);

    useEffect(() => {
        AOS.init({
            offset: 80,
            duration: 1000,
            once: true,
            easing: 'ease',
        });
        AOS.refresh();

    }, [])

    console.log(process.env)
    return (
        <>
            <ToastContainer position="bottom-right" />
            <div className="relative flex min-h-screen bg-gray-100 ">

                <Sidebar open={open} setOpen={setOpen} />

                <div className=" flex-1">

                    <Navbar open={open} setOpen={setOpen} />
                    <div data-aos="fade-up" data-aos-anchor-placement="top-center" >
                        {/* <AnimatePresence exitBeforeEnter > */}
                        <Routes location={location} key={location.key}>
                            {/* <span  ></span> */}
                            <Route path="/" element={<ClientDashboard />} exact />
                            <Route path="/profile" element={<ProfileUser />} />
                            <Route path="/form" element={<Form1 />} />
                            <Route path="/address" element={<Address />} />
                            <Route path="/category" element={<Category />} />
                            <Route path="/problem" element={<Problem />} />
                            <Route path="/confirm/tickets" element={<ClientConfirmTickets />} />
                            <Route path="/all/tickets" element={<AllTickets />} />
                            <Route path="/pending/tickets" element={<ClientPendingTickets />} />
                            <Route path="track/tickets" element={<Track />} />
                            <Route path="track/:id" element={<TrackById />} />
                            <Route path="ticket/:id" element={<ClientTicketDetails />} />

                            <Route path="/feedback" element={<Feedback />} />
                            <Route path="/contact-us" element={<ContactUs />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Register />} />
                            <Route path="/events" element={<Events />} />



                            <Route path="/admin/dashboard" element={<TicketDashboard />} />

                            <Route path="/users" element={<AllUsers />} />
                            <Route path="/admins/users" element={<AllAgents />} />

                            <Route path="/confirm-tickets" element={<ConfirmTickets />} />
                            <Route path="/pending-tickets" element={<PendingTickets />} />
                            {/* <Route path="/pending-tickets/:pageNumber" element={<PendingTickets />} /> */}
                            <Route path="/total-tickets" element={<TotalTickets />} />
                            <Route path="/detail/:id" element={<TicketDetails />} />
                            <Route path="/edit/:id" element={<EditTickets />} />

                            <Route path="/edit/user/:id" element={<EditUser />} />

                            <Route path="/all/messages" element={<AllMessages />} />
                            <Route path="/all/feedbacks" element={<AllFeedbacks />} />

                            <Route path="/agents/newTc" element={<NewTc />} />
                            <Route path="/agents/workingTc" element={<OnWorkingTc />} />
                            <Route path="/agents/closedTc" element={<ClosedTc />} />
                            <Route path="/detail-discussion/:id" element={<AgentDetailDiscussion />} />
                            {/* detail-discussion */}

                        </Routes>
                        {/* </AnimatePresence> */}
                    </div>

                </div>
            </div>



        </>

    )
}

export default App

