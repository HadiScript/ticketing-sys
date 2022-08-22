import React from 'react'

import { Link } from 'react-router-dom'
import { FaInfo } from 'react-icons/fa'
import { MdOutlineReportProblem } from 'react-icons/md'
import { BiCategoryAlt } from 'react-icons/bi'


const Step = ({ step1, step2, step3, }) => {
    return (
        <div>
            <h2 className="sr-only">Steps</h2>

            <div>
                <div className="overflow-hidden bg-gray-200 rounded-full">
                    {
                        step1 && <div className={` w-1 h-2 bg-darkFrom rounded-full`}></div>
                    }
                    {
                        step2 && <div className={` w-1/2 h-2 bg-darkFrom rounded-full`}></div>
                    }
                    {
                        step3 && <div className={` w-full h-2 bg-darkFrom rounded-full`}></div>
                    }
                </div>

                <ol className="grid grid-cols-3 mt-4 text-sm font-medium text-gray-500">
                    <Link to="/form" >
                        <li className="flex items-center justify-start text-darkFrom">
                            <span className="hidden sm:inline"> Basic Info </span>

                            <FaInfo className='ml-1' />
                        </li>
                    </Link>
                    {
                        step2 || step3 ? <Link to="/category"><li className="flex items-center justify-center text-darkFrom">
                            <span className="hidden sm:inline text-darkFrom"> Category </span>
                            <BiCategoryAlt className="ml-1 text-darkFrom" />
                        </li> </Link> :
                            <li className="flex items-center justify-center text-gray-400">
                                <span className="hidden sm:inline"> Category </span>
                                <BiCategoryAlt className="ml-1" />
                            </li>
                    }

                    {
                        step3 ? <Link to="/problem"> <li className="flex items-center justify-end text-darkFrom">
                            <span className="hidden sm:inline text-darkFrom"> Problem </span>

                            <MdOutlineReportProblem className='ml-1 text-darkFrom' />
                        </li> </Link> :
                            <li className="flex items-center justify-end text-gray-500">
                                <span className="hidden sm:inline"> Problem </span>

                                <MdOutlineReportProblem className='ml-1' />
                            </li>
                    }
                </ol>
            </div>
        </div>
    )
}

export default Step