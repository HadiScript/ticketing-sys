import React from 'react'

import { Link } from 'react-router-dom'
import { HiUpload } from 'react-icons/hi'

const Raw = () => {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <nav className="flex lg:w-2/5 flex-wrap items-center text-base ">
                    <div className="mr-5 flex cursor-pointer  hover:text-gray-900">
                        <Link to={"/form"} className="flex" >
                            Submit{" "}<HiUpload className='text-xl ml-1' />
                        </Link>
                    </div>
                    {/* <div className="mr-5  cursor-pointer hover:text-gray-900">
                        <Link to={"/history"} className="flex">
                            Tickets History <RiFolderHistoryFill className="text-xl ml-1" />
                        </Link>
                    </div> */}
                </nav>
            </div>
        </header>
    )
}

export default Raw