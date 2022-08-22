import { Checkbox } from '@material-ui/core'
import React, { useState } from 'react'

import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'
import Step from '../../../components/clientUI/Step'
import { MdOutlineCategory, MdOutlineSyncProblem, MdFilterList } from 'react-icons/md'
import { CgListTree } from 'react-icons/cg'
import { AiFillSetting } from 'react-icons/ai'
import { GiLaptop } from 'react-icons/gi'

import '../../../components/adminUI/cats.css'

const Category = () => {
    const [saved, setSaved] = useState(false)
    // const prv_data = JSON.parse(localStorage.getItem('form2'))

    const [hosting, setHosting] = useState("");
    const [deploy, setDeploy] = useState("");
    // const [] = useState("");
    // const [] = useState("");


    const submitHandler = e => {
        e.preventDefault();
        let data;
        if (deploy !== "") {
            data = { deploy }
        } else if (hosting !== "") {
            data = { hosting }
        }
        localStorage.setItem("form2", JSON.stringify(data))
    }


    return (
        <>
            <motion.div
                exit={{
                    x: '-100vw',
                    transition: { ease: 'easeInOut' }
                }}
                className="container mx-auto ">

                <div className="card lg:card-side mt-5 bg-white text-gray-900 shadow-xl mx-3">
                    <div className="card-body">

                        <Step step2 />


                        <form onSubmit={submitHandler}>
                            <section class="grid grid-cols-1  gap-6 mt-4 sm:grid-cols-5">

                                <article class="feature1">
                                    <input value="hosting" onChange={e => setHosting(e.target.value)} type="checkbox" id="feature1" />
                                    <div>
                                        <span className='flex items-center '>
                                            Hosting <GiLaptop className='ml-2 text-3xl' />
                                        </span>
                                    </div>
                                </article>

                                <article class="feature1">
                                    <input value="deploy" onChange={e => setDeploy(e.target.value)} type="checkbox" id="feature1" />
                                    <div>
                                        <span className='flex items-center '>
                                            Deployment <MdOutlineCategory className='ml-2 text-3xl' />
                                        </span>
                                    </div>
                                </article>
                                <article class="feature1">
                                    <input type="checkbox" id="feature1" />
                                    <div>
                                        <span className='flex items-center '>
                                            Coding <MdFilterList className='ml-2 text-3xl' />
                                        </span>
                                    </div>
                                </article>
                                <article class="feature1">
                                    <input type="checkbox" id="feature1" />
                                    <div>
                                        <span className='flex items-center '>
                                            Laptops <CgListTree className='ml-2 text-3xl' />
                                        </span>
                                    </div>
                                </article>
                                <article class="feature1">
                                    <input type="checkbox" id="feature1" />
                                    <div>
                                        <span className='flex items-center '>
                                            Computers <MdOutlineSyncProblem className='ml-2 text-3xl' />
                                        </span>
                                    </div>
                                </article>
                                <article class="feature1">
                                    <input type="checkbox" id="feature1" />
                                    <div>
                                        <span className='flex items-center '>
                                            Checking <AiFillSetting className='ml-2 text-3xl' />
                                        </span>
                                    </div>
                                </article>

                            </section>

                            {/* ends */}


                            <div className="flex justify-between mt-6">
                                <button type='submit' onClick={() => setSaved(true)} className='btn ml-3 bg-darkTo hover:bg-darkFrom text-white'>save</button>
                                {
                                    saved && <Link to="/problem">
                                        <button className="btn bg-darkTo hover:bg-darkFrom text-white">Next</button>
                                    </Link>
                                }
                            </div>
                        </form>

                    </div>
                </div>
            </motion.div>







        </>
    )
}

export default Category