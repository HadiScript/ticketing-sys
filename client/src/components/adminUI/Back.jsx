import React from 'react'
import { Link } from 'react-router-dom'

import { TiArrowBack } from 'react-icons/ti'

const Back = () => {
    return (
        <Link to='/admin/dashboard' >

            <strong class="inline-flex items-center  rounded relative px-2.5 py-1.5 text-xs font-medium">
                {/* <span class="animate-ping w-2.5 h-2.5 bg-green-600/75 rounded-full absolute -top-1 -left-1"></span>
                <span class="w-2.5 h-2.5 bg-green-600 rounded-full absolute -top-1 -left-1"></span> */}

                <TiArrowBack className='text-4xl text-gray-700' />
            </strong>
        </Link>
    )
}

export default Back