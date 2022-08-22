import React from 'react'

import Footer from '../../components/UI/Footer'
// import Raw from '../../components/clientUI/Raw'

import { motion } from 'framer-motion'


const ConfirmTickets = () => {
    return (
        <>

            <motion.div
                exit={{
                    x: '-100vw',
                    transition: { ease: 'easeInOut' }
                }}
                className="container mx-auto ">
                <div class="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
                    <div class="card-body">
                        <section class="text-gray-600 body-font overflow-hidden">

                            <h3 className='text-gray-700 pt-5 text-xl font-bold' >Confirmed Tickets</h3>
                            <div class="container px-5 py-10 mx-auto">

                                <div class="-my-8 divide-y-2 divide-gray-100">
                                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span class="font-semibold title-font text-gray-700">HOSTING</span>
                                            <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                                        </div>
                                        <div class="md:flex-grow">
                                            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Problem in hosting node app</h2>
                                            <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                                            <a href='/' class="text-indigo-500 inline-flex items-center mt-4">Edit
                                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="py-8 flex flex-wrap md:flex-nowrap">
                                        <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span class="font-semibold title-font text-gray-700">HOSTING</span>
                                            <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                                        </div>
                                        <div class="md:flex-grow">
                                            <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">Problem in hosting node app</h2>
                                            <p class="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                                            <a href='/' class="text-indigo-500 inline-flex items-center mt-4">Edit
                                                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
            </motion.div>


            <Footer />
        </>
    )
}

export default ConfirmTickets